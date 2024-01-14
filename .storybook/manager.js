import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://nepersonaj.ru/icon.svg',
    brandTitle: 'NEPERSONAJ Components',
    brandUrl: 'https://nepersonaj.ru',
  },
});
