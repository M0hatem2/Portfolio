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
import { Router } from '@angular/router';
import { Project } from '../portfolio/portfolio';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portofolio-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portofolio-card.html',
  styleUrl: './portofolio-card.scss',
})
export class PortofolioCard implements AfterViewInit, OnDestroy {
  @Output() projectOpened = new EventEmitter<Project>();

  private io!: IntersectionObserver;

  get displayedProjects() {
    return this.router.url.includes('portfolio') ? this.projects : this.projects.slice(0, 3);
  }

  constructor(private el: ElementRef, private router: Router) {}

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = this.el.nativeElement.querySelectorAll('.reveal');
    reveals.forEach((r: Element) => {
      (r as HTMLElement).style.opacity = '0';
      (r as HTMLElement).style.transform = 'translateY(30px)';
      this.io.observe(r);
    });
  }

  ngOnDestroy(): void {
    if (this.io) this.io.disconnect();
  }

  openProject(project: Project) {
    this.projectOpened.emit(project);
  }

  selectedProject: any = null;
  showModal = false;

  openModal(project: any) {
    this.selectedProject = project;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
  }
  projects: any[] = [
  {
    title: 'Modern Portfolio Website',
    description: 'A personal portfolio website built using Angular and Tailwind CSS. Includes animations, dark mode, and smooth navigation.',
    mainImage: 'assets/images/projects/portfolio/main.jpg',
    gallery: [
      'assets/images/projects/portfolio/1.jpg',
      'assets/images/projects/portfolio/2.jpg',
      'assets/images/projects/portfolio/3.jpg'
    ],
    technologies: ['Angular', 'TailwindCSS', 'TypeScript', 'AOS.js'],
    link: 'https://myportfolio.com',
    github: 'https://github.com/mohamedhatem/portfolio'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'An admin dashboard for managing products, users, and sales analytics with real-time charts and reports.',
    mainImage: 'assets/images/projects/dashboard/main.jpg',
    gallery: [
      'assets/images/projects/dashboard/1.jpg',
      'assets/images/projects/dashboard/2.jpg'
    ],
    technologies: ['Angular', 'Firebase', 'Chart.js', 'Material UI'],
    link: 'https://ecommerce-dashboard.web.app',
    github: 'https://github.com/mohamedhatem/ecommerce-dashboard'
  },
  {
    title: 'Smart Coffee Tracker',
    description: 'IoT system to track coffee usage using ESP32 and Firebase, with a real-time dashboard built in Angular.',
    mainImage: 'assets/images/projects/smart-coffee/main.jpg',
    gallery: [
      'assets/images/projects/smart-coffee/1.jpg',
      'assets/images/projects/smart-coffee/2.jpg',
      'assets/images/projects/smart-coffee/3.jpg'
    ],
    technologies: ['ESP32', 'Firebase', 'Ubidots', 'Angular'],
    link: 'https://smartcoffee.io',
    github: 'https://github.com/mohamedhatem/smart-coffee'
  },
  {
    title: 'Mochi Store Website',
    description: 'A sweets e-commerce website for selling Mochi desserts, with admin control panel and cart system.',
    mainImage: 'assets/images/projects/mochi-store/main.jpg',
    gallery: [
      'assets/images/projects/mochi-store/1.jpg',
      'assets/images/projects/mochi-store/2.jpg',
      'assets/images/projects/mochi-store/3.jpg'
    ],
    technologies: ['Angular', 'Node.js', 'MongoDB', 'TailwindCSS'],
    link: 'https://mochistore.com',
    github: 'https://github.com/mohamedhatem/mochi-store'
  },
  {
    title: 'RFID Access Control System',
    description: 'RFID-based system for door access and user management with Firebase integration and logs.',
    mainImage: 'assets/images/projects/rfid-system/main.jpg',
    gallery: [
      'assets/images/projects/rfid-system/1.jpg',
      'assets/images/projects/rfid-system/2.jpg'
    ],
    technologies: ['ESP32', 'Firebase', 'RFID', 'Angular'],
    link: 'https://rfid-access.com',
    github: 'https://github.com/mohamedhatem/rfid-access'
  },
  {
    title: 'Clothing Brand Website',
    description: 'An e-commerce clothing website with product filtering, cart, and Stripe payment integration.',
    mainImage: 'assets/images/projects/clothing-brand/main.jpg',
    gallery: [
      'assets/images/projects/clothing-brand/1.jpg',
      'assets/images/projects/clothing-brand/2.jpg',
      'assets/images/projects/clothing-brand/3.jpg'
    ],
    technologies: ['Angular', 'Firebase', 'Stripe API', 'TailwindCSS'],
    link: 'https://clothingbrand.com',
    github: 'https://github.com/mohamedhatem/clothing-brand'
  }
];

}
