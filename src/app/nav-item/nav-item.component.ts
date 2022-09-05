import { Component, Input, OnInit } from '@angular/core'
import { IDescribe } from '../model/describe';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() item: IDescribe = {
    title: "",
    detail: ""
  };
  @Input() index: number = 0;
  isShowingDetails: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--dynamicColorTest', "transparent");
  }

  getRotation()
  {
    //todo: potential memory leak here!
    const calculatedRotation: number = 360 / 6 * this.index;
    return calculatedRotation + "deg";
  }

  getTransition()
  {
    //todo: potential memory leak here!
    const calculatedTransition: number = 360 / 6 * this.index;
    return calculatedTransition + "deg";
  }
  test()
  {
    console.log("hello angular")
  }
}
