import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit(): void {
    // Initialize AOS for animations
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    // Reset form
    this.contactForm = { name: '', email: '', message: '' };
  }
}
