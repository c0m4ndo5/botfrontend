import { Component, OnInit, Input } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('state', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0,
        display: 'none'
      })),
      transition('visible => invisible', animate(300))
    ])
  ]
})
export class WelcomeComponent implements OnInit {
  state = 'visible';
  constructor() { }

  ngOnInit() {
    // this.state = 'invisible';
  }

}
