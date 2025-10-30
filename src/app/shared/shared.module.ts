import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMe } from './components/about-me/about-me';
import { ButtonComponent } from './components/button/button.component';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AboutMe, ButtonComponent, Skills, Experience, ProjectModalComponent],
  exports: [AboutMe, ButtonComponent, Skills, Experience, ProjectModalComponent],
})
export class SharedModule {}
