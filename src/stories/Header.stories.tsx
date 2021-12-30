import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header, Search, CartIcon } from '../components';
import CategoriesProvider from '../contexts/CategoriesContext';
import ShoppingProvider from '../contexts/ShoppingContext';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => {
      return (
        <CategoriesProvider>
          <Story />
        </CategoriesProvider>
      );
    },
  ],
} as ComponentMeta<typeof Header>;

export const HeaderEmpty: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const HeaderWithCartIcon: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <Search />
    <CartIcon />
  </Header>
);
HeaderWithCartIcon.decorators = [
  (Story) => (
    <ShoppingProvider>
      <Story />
    </ShoppingProvider>
  ),
];

export const HeaderInitial: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <CartIcon />
  </Header>
);
HeaderInitial.decorators = [
  (Story) => (
    <ShoppingProvider>
      <Story />
    </ShoppingProvider>
  ),
];
