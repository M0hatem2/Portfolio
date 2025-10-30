import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { AboutMe } from "../../../../shared/components/about-me/about-me";
import { Portfolio } from "../../../../shared/components/portfolio/portfolio";

@Component({
  selector: 'app-home-page',
  imports: [BannerComponent, AboutMe, Portfolio],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
