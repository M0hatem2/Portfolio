import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}
@Component({
  selector: 'app-languages',
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss'
})
export class Languages {

  languages: Skill[] = [
  { name: 'Arabic', percentage: 100, color: 'accent' },
  { name: 'English', percentage: 85, color: 'primary' },
 ];
}
