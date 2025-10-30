import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}
@Component({
  selector: 'app-tools',
  imports: [CommonModule],
  templateUrl: './tools.html',
  styleUrl: './tools.scss'
})
export class Tools {

  tools: Skill[] = [
    { name: 'Git & GitHub', percentage: 90, color: 'primary' },
    { name: 'VS Code', percentage: 95, color: 'accent' },
    { name: 'Postman', percentage: 85, color: 'secondary' },
    { name: 'Figma', percentage: 88, color: 'primary' },
    { name: 'Chrome DevTools', percentage: 90, color: 'accent' },
  ];
}
