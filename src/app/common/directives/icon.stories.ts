import { type Meta, type StoryObj } from '@storybook/angular';
import { IconDirective } from './icon';

type Story = StoryObj<IconDirective>;

const meta: Meta<IconDirective> = {
  title: 'Common/Icon',
  component: IconDirective,
  decorators: [],
};

export default meta;

export const Default: Story = {
  args: {},
  render: () => ({
    props: {},
    template: `
<span appIcon="home"></span>
<span appIcon="content_copy"></span>
<span appIcon="edit"></span>
<span appIcon="arrow_outward"></span>
<span appIcon="add_circle"></span>
<span appIcon="delete"></span>
<span appIcon="delete"></span>
<span appIcon="save"></span>
<span appIcon="note_add"></span>
<span appIcon="list_alt"></span>
`,
  }),
};

export const Colors: Story = {
  args: {},
  render: () => ({
    props: {},
    template: `
<span appIcon="home" class="success"></span>
<span appIcon="content_copy" class="warning"></span>
<span appIcon="edit" class="error"></span>
<span appIcon="arrow_outward" class="info"></span>
<span appIcon="add_circle" class="success"></span>
<span appIcon="delete" class="warning"></span>
<span appIcon="delete" class="error"></span>
<span appIcon="save" class="info"></span>
<span appIcon="note_add" class="success"></span>
<span appIcon="list_alt"></span>
`,
  }),
};
