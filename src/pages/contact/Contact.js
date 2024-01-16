import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const initDelay = tokens.base.durationS;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    try {
      setSending(true);

      const userEmail = email.value;
      const userMessage = message.value;

      if (!userEmail || !userMessage) {
        console.error("Email and message cannot be empty");
        setSending(false);
        return;
      }

      const templateParams = {
        to_name: 'Recipient Name', // Замените на имя получателя
        from_name: 'Your Name', // Замените на ваше имя
        message: `У вас новое сообщение от ${userEmail}:\n\n${userMessage}`,
      };

      await emailjs.sendForm('service_287rj0h', 'template_sc4smdw', form.current, 'user_abc123', templateParams);

      setComplete(true);
      setSending(false);
    } catch (error) {
      console.error("Error:", error);
      setSending(false);
    }
  };

  return (
    <Section className={styles.contact}>
      <Meta
        title="Contact"
        description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          <form className={styles.form} ref={form} onSubmit={onSubmit}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              name="user_email"
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your Email"
              type="email"
              maxLength={512}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={4096}
              {...message}
            />
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={complete}>
        {(visible, status) => (
          <div className={styles.complete} aria-live="polite">
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevronRight"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
