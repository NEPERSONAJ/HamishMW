export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ 
      success: false,
      message: 'Missing required fields' 
    });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ 
      success: false,
      message: 'Server configuration error' 
    });
  }

  try {
    // Экранируем специальные символы
    const escapedEmail = email.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
    const escapedMessage = message.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
    
    const telegramMessage = `Новое сообщение с сайта\n\nEmail: ${escapedEmail}\n\nСообщение:\n${escapedMessage}`;
    
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data.description || 'Failed to send message');
    }

    return res.status(200).json({ 
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Error sending message to Telegram'
    });
  }
}
