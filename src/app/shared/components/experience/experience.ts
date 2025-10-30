import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Experiences {
  title: string;
  company: string;
  period: string;
  description: string;
  color: string;
}
@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  experience: Experiences[] = [
    {
      title: 'Frontend Developer',
      company: 'Crevel',
      period: '2024 - Present',
      description: 'Building modular UI with Angular and Tailwind.',
      color: 'primary',
    },
    {
      title: 'Frontend Developer',
      company: 'Crevel',
      period: '2024 - Present',
      description: 'Building modular UI with Angular and Tailwind.',
      color: 'primary',
    },
    {
      title: 'Frontend Developer',
      company: 'Crevel',
      period: '2024 - Present',
      description: 'Building modular UI with Angular and Tailwind.',
      color: 'primary',
    },
    {
      title: 'UI/UX Designer',
      company: 'Freelance',
      period: '2022 - 2024',
      description: 'Design systems, prototypes and animations.',
      color: 'secondary',
    },
  ];
}
