import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Portfolio } from '../../../shared/components/portfolio/portfolio';
import { Project } from '../../../shared/components/portfolio/portfolio';
import { PortofolioCard } from "../../../shared/components/portofolio-card/portofolio-card";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Portfolio, PortofolioCard],
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements AfterViewInit, OnDestroy {

  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  selectedProject: Project | null = null;
  isModalOpen = false;

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
      r.classList.remove('in-view');
      (r as HTMLElement).style.opacity = '0';
      (r as HTMLElement).style.transform = 'translateY(24px)';
      this.io.observe(r);
    });
  }

  ngOnDestroy(): void {
    if (this.io) this.io.disconnect();
  }

  onSubmit(): void {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      // Handle form submission, e.g., send to service
      console.log('Form submitted:', this.contactForm);
      // Reset form
      this.contactForm = { name: '', email: '', message: '' };
      alert('Thank you for your message! I will get back to you soon.');
    }
  }

  onProjectOpened(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}