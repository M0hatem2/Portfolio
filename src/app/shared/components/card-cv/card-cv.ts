import { Component } from '@angular/core';
interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}
@Component({
  selector: 'app-card-cv',
  imports: [],
  templateUrl: './card-cv.html',
  styleUrl: './card-cv.scss'
})
export class CardCv {
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
}
