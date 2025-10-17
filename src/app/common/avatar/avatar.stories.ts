import { type Meta, type StoryObj } from '@storybook/angular';
import { Avatar } from './avatar';

type Story = StoryObj<Avatar>;

const meta: Meta<Avatar> = {
  title: 'Resume/Avatar',
  component: Avatar,
  decorators: [],
};

export default meta;

export const Default: Story = {
  args: {
    imageUrl:
      'https://www.gravatar.com/avatar/4e5631c632b3fd91e40d96f81327bea9?s=200',
  },
};

export const BillMurray: Story = {
  args: {
    imageUrl: 'https://fillmurray.lucidinternets.com/200/300',
  },
};
