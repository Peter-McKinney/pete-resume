import { type Meta, type StoryObj } from '@storybook/angular';
import { ResumeObjective } from './resume-objective';

type Story = StoryObj<ResumeObjective>;

const meta: Meta<ResumeObjective> = {
  title: 'Resume/Objective',
  component: ResumeObjective,
  decorators: [],
};

export default meta;

export const Default: Story = {
  args: {
    objective:
      'Dedicated and results-driven software engineer with 5+ years of experience in developing scalable web applications and working across the full stack. Proficient in JavaScript, TypeScript, and Angular, with a strong background in UI/UX design and cloud technologies. Seeking to leverage my technical expertise and problem-solving skills to contribute to innovative projects in a dynamic team environment.',
  },
};
