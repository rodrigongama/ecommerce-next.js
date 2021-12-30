import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Product } from '../components';

export default {
  title: 'Components/Product',
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const ProductWithSpecialPrice = Template.bind({});
ProductWithSpecialPrice.args = {
  name: 'bola',
  price: 100,
  specialPrice: 50,
  image: '/shoes-2.jpg',
};

export const ProductWhithoutSpecialPrice = Template.bind({});
ProductWhithoutSpecialPrice.args = {
  name: 'bola',
  price: 100,
  image: '/shirt-1.jpg',
};
