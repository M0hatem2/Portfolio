import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Stat {
  value: number;
  label: string;
}
@Component({
  selector: 'app-stats-card',
  imports: [CommonModule],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.scss'
})
export class StatsCard {
 stats: Stat[] = [
    { value: 120, label: 'Projects' },
    { value: 4, label: 'Years' },
    { value: 95, label: 'Satisfaction %' },
    { value: 10, label: 'Open Source' },
  ];
}
