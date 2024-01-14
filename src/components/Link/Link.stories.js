import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://nepersonaj.ru">Основная ссылка</Link>
    <Link secondary href="https://nepersonaj.ru">
      Вторичная ссылка
    </Link>
  </StoryContainer>
);
