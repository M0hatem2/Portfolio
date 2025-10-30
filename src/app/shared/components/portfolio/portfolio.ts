import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortofolioCard } from '../portofolio-card/portofolio-card';
import { RouterLink } from '@angular/router';
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  tools: string[];
  ProjectLive: string;
  projectGit: string;
}

@Component({
  selector: 'app-Portfolio',
  standalone: true,
  imports: [CommonModule, PortofolioCard ,RouterLink],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
})
export class Portfolio implements AfterViewInit, OnDestroy {
 
  @Output() projectOpened = new EventEmitter<Project>();

  private io!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = this.el.nativeElement.querySelectorAll('.reveal');
    reveals.forEach((r: Element) => {
      // Ensure elements start hidden
      r.classList.remove('in-view');
      (r as HTMLElement).style.opacity = '0';
      (r as HTMLElement).style.transform = 'translateY(24px)';
      this.io.observe(r);
    });
  }

  ngOnDestroy(): void {
    if (this.io) this.io.disconnect();
  }

  onProjectOpened(project: Project) {
    this.projectOpened.emit(project);
  }
}
