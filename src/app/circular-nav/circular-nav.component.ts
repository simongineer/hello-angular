import { Component } from '@angular/core';
import { IPage } from '../model/page';

@Component({
  selector: 'app-circular-nav',
  templateUrl: './circular-nav.component.html',
  styleUrls: ['./circular-nav.component.scss']
})
export class CircularNavComponent {
  totalItemCount: number = 6;
  navItems: IPage[] = [
    {
      "title": "about\nme",
      "detail": "who is simon rahm?",
      "routerLink": "/about-me"
    },
    {
      "title": "acquired\nskills",
      "detail": "skills i aquired due to work, projects and curiousity",
      "routerLink": "/skills"
    },
    {
      "title": "projects",
      "detail": "projects i have done",
      "routerLink": "/projects"
    },
    {
      "title": "interests",
      "detail": "free time acitivites and hobbies",
      "routerLink": "/interests"
    },
    {
      "title": "wants",
      "detail": "requirements and desires for proper working",
      "routerLink": "/wants"
    },
    {
      "title": "download",
      "detail": "download section & contact opportunities",
      "routerLink": "/download"
    }
  ];

  getRotationForItem(index: number) {
    //potentual memory leak here
    const calculatedRotation: number = 360 / this.totalItemCount * index * (-1);
    //console.log("Calculated degree for " + index + " " + calculatedRotation)

    return calculatedRotation + "deg";
  }
}
