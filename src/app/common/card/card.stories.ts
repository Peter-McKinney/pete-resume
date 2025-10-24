import type { Meta, StoryObj } from '@storybook/angular';
import { ResumeCard } from './card';

type Story = StoryObj<ResumeCard>;

const meta: Meta<ResumeCard> = {
  title: 'Resume/Card',
  component: ResumeCard,
  decorators: [],
};

export default meta;

export const Default: Story = {
  args: {
    card: {
      title: 'Sample Card',
      itemsHeader: 'Sample Card Header',
      subTitle: 'Sample Subtitle',
      items: ['Sample item 1', 'Sample item 2', 'Sample item 3'],
    },
  },
};

export const Alternate: Story = {
  args: {
    isAlternate: true,
    card: {
      title: 'Sample Card',
      itemsHeader: 'Sample Card Header',
      subTitle: 'Sample Subtitle',
      items: ['Sample item 1', 'Sample item 2', 'Sample item 3'],
    },
  },
};

const cards = [
  {
    title: 'Sample Card',
    itemsHeader: 'Sample Card Header',
    subTitle: 'Sample Subtitle',
    items: ['Sample item 1', 'Sample item 2', 'Sample item 3'],
  },
  {
    title: 'Sample Card',
    itemsHeader: 'Sample Card Header',
    subTitle: 'Sample Subtitle',
    items: ['Sample item 1', 'Sample item 2', 'Sample item 3'],
  },
  {
    title: 'Sample Card',
    itemsHeader: 'Sample Card Header',
    subTitle: 'Sample Subtitle',
    items: ['Sample item 1', 'Sample item 2', 'Sample item 3'],
  },
  {
    title: 'Sample Card',
    itemsHeader: 'Sample Card Header',
    subTitle: 'Sample Subtitle',
    items: ['Sample item 1', 'Sample item 2', 'Sample item 3'],
  },
];

export const CardList: Story = {
  args: {},
  render: () => ({
    props: {
      cards,
    },
    template: `
<div class="card-list">
  @for(card of cards; track $index) {
    <app-resume-card [card]="card"></app-resume-card>
  }
</div>
`,
  }),
};

export const AlternateCardList: Story = {
  args: {},
  render: () => ({
    props: {
      cards,
    },
    template: `
<div class="card-list">
  @for(card of cards; track $index) {
    <app-resume-card [isAlternate]="true" [card]="card"></app-resume-card>
  }
</div>
`,
  }),
};
