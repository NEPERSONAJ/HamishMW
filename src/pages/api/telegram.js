import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Method not allowed' 
      }), 
      { 
        status: 405,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }

  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Missing required fields' 
        }), 
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Server configuration error' 
        }), 
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

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
        text: telegramMessage,
        parse_mode: 'MarkdownV2'
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data.description || 'Failed to send message');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully' 
      }), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error('Error sending message:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error sending message to Telegram' 
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}
