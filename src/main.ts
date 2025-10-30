// Main entry point
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { inject } from '@angular/core';

bootstrapApplication(App, appConfig);

// ✅ Scroll to Top on Route Change
const router = inject(Router);
const viewportScroller = inject(ViewportScroller);

router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
    viewportScroller.scrollToPosition([0, 0]);
  }
});
