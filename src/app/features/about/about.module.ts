import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, AboutRoutingModule],
})
export class AboutModule {}