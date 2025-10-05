import { Component } from '@angular/core';
import { ResumeObjective } from './resume-objective/resume-objective';
import { ResumeWorkExperienceSection } from './resume-work-experience-section/resume-work-experience-section';
import { ResumeEducationSection } from './resume-education-section/resume-education-section';

@Component({
  selector: 'app-resume',
  imports: [
    ResumeObjective,
    ResumeWorkExperienceSection,
    ResumeEducationSection,
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  workExperiences = [
    {
      title: 'Senior Software Engineer',
      dateRange: '2020 - Present',
      companyName: 'Tech Solutions Inc.',
      experiences: [
        'Led a team of 5 developers to design and implement a new e-commerce platform, resulting in a 30% increase in sales.',
        'Developed and maintained web applications using Angular, Node.js, and MongoDB.',
        'Collaborated with cross-functional teams to define project requirements and deliverables.',
      ],
    },
    {
      title: 'Full Stack Developer',
      dateRange: '2015 - 2020',
      companyName: 'Web Innovations LLC',
      experiences: [
        'Built and optimized web applications for various clients, improving load times by up to 40%.',
        'Implemented RESTful APIs and integrated third-party services.',
        'Participated in code reviews and contributed to team knowledge sharing sessions.',
      ],
    },
  ];

  educations = [
    {
      institution: 'State University',
      dateRange: '2011 - 2015',
      items: [
        'Bachelor of Science in Computer Science',
        'Graduated with Honors',
        'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems',
      ],
    },
    {
      institution: 'Community College',
      dateRange: '2009 - 2011',
      items: [
        'Associate Degree in Information Technology',
        'Dean’s List for 4 semesters',
        'Relevant Coursework: Programming Fundamentals, Network Basics, System Administration',
      ],
    },
  ];

  objective =
    'I have 15 years’ experience as a full stack developer. I am seeking a senior development position that will allow for growth in my programming career. In this position, I hope to collaborate with and lead other developers to produce software products that satisfy product owner needs using current programming methodologies.';
}
