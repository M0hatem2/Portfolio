import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then((m) => m.HomePage),
    title: "Mohamed's Portfolio",
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/pages/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/pages/services-page.component').then(
        (m) => m.ServicesPageComponent
      ),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./features/portfolio/pages/portfolio-page.component').then(
        (m) => m.PortfolioPageComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact-page.component').then((m) => m.ContactPageComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
