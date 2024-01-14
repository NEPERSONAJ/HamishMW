const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const aws = require('@aws-sdk/client-ses');

const app = express();
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const ses = new aws.SES({
  region: 'us-east-1',
});

const ORIGINS = ['https://nepersonaj.ru', 'https://nepersonaj.ru'];
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL = 'support@nepersonaj.ru';
const FROM_EMAIL = 'mailbot@nepersonaj.ru';
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!ORIGINS.includes(origin)) {
        return callback(
          new Error(`Не разрешено CORS. Происхождение должно быть: ${ORIGINS.join(' or ')}`)
        );
      }

      return callback(null, true);
    },
  })
);
app.options('*', cors());

app.post('/message', async (req, res) => {
  try {
    const email = DOMPurify.sanitize(req.body.email);
    const message = DOMPurify.sanitize(req.body.message);

    // Validate email request
    if (!email || !EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ error: 'Пожалуйста, введите действительный адрес электронной почты' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Пожалуйста, введите сообщение' });
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Пожалуйста, в email используйте меньше чем ${MAX_EMAIL_LENGTH} символов`,
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Пожалуйста, используйте меньше чем ${MAX_MESSAGE_LENGTH} символов`,
      });
    }

    // Send email using AWS SES
    await ses.sendEmail({
      Source: `Portfolio <${FROM_EMAIL}>`,
      Destination: {
        ToAddresses: [EMAIL],
      },
      Message: {
        Subject: { Data: `Новое сообщение от ${email}` },
        Body: {
          Text: { Data: `От: ${email}\n\n${message}` },
        },
      },
    });

    return res.status(200).json({ message: 'Сообщение успешно отправлено' });
  } catch (error) {
    console.error('Rejected', error);
    return res.status(500).json({ error: 'Сообщение отклонено' });
  }
});

module.exports.handler = serverless(app);
