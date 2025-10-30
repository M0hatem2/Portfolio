// Data interfaces
interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  description: string;
  color: string;
}

interface SocialLink {
  url: string;
  ariaLabel: string;
  icon: string;
}

import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCv } from '../card-cv/card-cv';
import { AboutCard } from '../about-card/about-card';
import { StatsCard } from '../stats-card/stats-card';
import { Skills } from '../skills/skills';
import { Tools } from '../tools/tools';
import { Languages } from '../languages/languages';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, CardCv, AboutCard, StatsCard, Skills, Tools, Languages, Experience],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements AfterViewInit, OnDestroy {
  private io: IntersectionObserver | null = null;

  // Component data
  personalInfo: PersonalInfo = {
    name: 'Mohamed Hatem',
    title: 'Frontend Developer • UI/UX Enthusiast',
    description:
      "I'm a frontend developer who loves building beautiful, accessible interfaces. I focus on Angular, Tailwind and clean UX.",
    image:
      'https://scontent.fspx1-1.fna.fbcdn.net/v/t39.30808-6/470510093_1046451653897440_5030684237674029218_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HPJkpXW4dgAQ7kNvwH60iqm&_nc_oc=Adkirp1dM3sCE3aEq08hzI0f2Y_v90VKOBunoBzYbID4j0Z29n3VMRJpDiLonSOso_M&_nc_zt=23&_nc_ht=scontent.fspx1-1.fna&_nc_gid=nRf4kLYWXyLUe8Eo4Jh3_w&oh=00_AffsFpyWjOiAv_iLpdRcjS9dhZ4ygTMcKfBgcNJjYN8CAA&oe=68FFC67D',
    imageAlt: 'Profile',
  };

  socialLinks: SocialLink[] = [
    {
      url: '#',
      ariaLabel: 'Twitter',
      icon: 'fab fa-twitter',
    },
    {
      url: '#',
      ariaLabel: 'Github',
      icon: 'fab fa-github',
    },
  ];

  constructor(private host: ElementRef) {}

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            el.classList.add('in-view');
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';

            // لو فيه counter
            if (el.classList.contains('counter')) {
              this.animateCounter(el);
            }

            // لو العنصر من نوع reveal فيه skill bars
            if (el.classList.contains('reveal')) {
              const skillBars = el.querySelectorAll('.skill-bar');
              skillBars.forEach((sb: Element, index: number) => {
                const percent = Number((sb as HTMLElement).dataset['percent'] || '0');
                setTimeout(() => {
                  (sb as HTMLElement).style.width = percent + '%';
                  (sb as HTMLElement).style.transition = 'width 1.5s ease-out';
                }, 150 + index * 150); // تأثير متدرج
              });
            }
          } else {
            // لما العنصر يخرج من الشاشة يرجع لحالته الأصلية (اختياري)
            el.classList.remove('in-view');
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';

            const skillBars = el.querySelectorAll('.skill-bar');
            skillBars.forEach((sb: Element) => {
              (sb as HTMLElement).style.width = '0';
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    // مراقبة العناصر
    const reveals = this.host.nativeElement.querySelectorAll('.reveal');
    reveals.forEach((r: Element) => {
      r.classList.remove('in-view');
      (r as HTMLElement).style.opacity = '0';
      (r as HTMLElement).style.transform = 'translateY(24px)';
      this.io!.observe(r);
    });

    const counters = this.host.nativeElement.querySelectorAll('.counter');
    counters.forEach((c: Element) => this.io!.observe(c));

    const skillbars = this.host.nativeElement.querySelectorAll('.skill-bar');
    skillbars.forEach((sb: Element) => {
      const el = sb as HTMLElement;
      el.style.width = '0';
      el.classList.remove('animate');
    });
  }

  private animateCounter(el: HTMLElement) {
    const target = Number(el.dataset['target'] || '0');
    const duration = 1200;
    const start = performance.now();
    const initial = 0;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(initial + (target - initial) * easeOutCubic(progress));
      el.textContent = value.toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toString();
      }
    };
    requestAnimationFrame(step);

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }
  }

  ngOnDestroy(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }
}
