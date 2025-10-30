import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../portfolio/portfolio';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() selectedProject: Project | null = null;
  @Input() isModalOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  closeProject() {
    this.closeModal.emit();
  }

  openImage(img: string) {
    window.open(img, '_blank');
  }
}