import { Component } from '@angular/core';
import { IDescribe } from '../model/describe';

@Component({
  selector: 'app-circular-nav',
  templateUrl: './circular-nav.component.html',
  styleUrls: ['./circular-nav.component.scss']
})
export class CircularNavComponent {
  totalItemCount: number = 6;
  navItems: IDescribe[] = [
    {
      "title": "about\nme",
      "detail": "who is simon rahm?"
    },
    {
      "title": "acquired\nskills",
      "detail": "skills i aquired due to work, projects and curiousity"
    },
    {
      "title": "projects",
      "detail": "projects i have done"
    },
    {
      "title": "interests",
      "detail": "free time acitivites and hobbies"
    },
    {
      "title": "wants",
      "detail": "requirements and desires for proper working"
    },
    {
      "title": "download",
      "detail": "download section & contact opportunities"
    }
  ];

  getRotationForItem(index: number) {
    //potentual memory leak here
    const calculatedRotation: number = 360 / this.totalItemCount * index * (-1);
    //console.log("Calculated degree for " + index + " " + calculatedRotation)

    return calculatedRotation + "deg";
  }
}
