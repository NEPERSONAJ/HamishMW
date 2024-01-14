import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} @NEPERSONAJ.`}
      </span>
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        Все права защищены.
      </Link>
      <Text size="s" align="center" className={styles.additionalText}>
      <br />Meta Platforms Inc. (соцсети Facebook, Instagram) признана экстремистской,
        ее деятельность запрещена на территории России.
      </Text>
    </Text>
  </footer>
);
