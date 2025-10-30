import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    { name: 'Angular', percentage: 90, color: 'primary' },
    { name: 'TypeScript', percentage: 85, color: 'secondary' },
    { name: 'JavaScript (ES6+)', percentage: 90, color: 'primary' },
    { name: 'HTML5', percentage: 95, color: 'accent' },
    { name: 'CSS3', percentage: 95, color: 'accent' },
    { name: 'SCSS / SASS', percentage: 85, color: 'secondary' },
    { name: 'Tailwind CSS', percentage: 95, color: 'accent' },
    { name: 'Bootstrap', percentage: 90, color: 'accent' },
    { name: 'Responsive Design', percentage: 92, color: 'primary' },
    { name: 'UI/UX Principles', percentage: 88, color: 'secondary' },
  ];
}
