import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Header } from "./layout/header/header";
import { LayoutComponent } from "./layout/layout.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SharedModule } from "./shared/shared.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LayoutComponent, FooterComponent, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }
}
