import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ResumeHeader } from './resume-header';
import { provideRouter } from '@angular/router';

type Story = StoryObj<ResumeHeader>;

const meta: Meta<ResumeHeader> = {
  title: 'Resume/Header',
  component: ResumeHeader,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
};

export default meta;

export const Default: Story = {
  args: {
    resumeHeader: {
      displayName: 'Fake Person',
      contactInfo: {
        github: 'https://github.com/Peter-McKinney',
        phone: '555-555-5555',
        email: 'fake@fake.com',
        city: 'Some City',
        stateAbbreviation: 'ME',
      },
    },
  },
};
