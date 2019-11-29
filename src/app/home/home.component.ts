import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { bounce, flash, pulse, rubberBand, shake, tada, wobble, jello, bounceInUp, jackInTheBox, hinge,
  rollIn, zoomIn, slideInDown, fadeOut, bounceInLeft, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('bounce', [transition('* => *', useAnimation(bounceInDown,{
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 3, delay: 0 }
      }))])
  ]
})
export class HomeComponent implements OnInit {

  myStyles : any;
  constructor(private router: Router) {
    this.myStyles = {
      width: '50%'
    };
  }

  ngOnInit() {
    localStorage.setItem('ProgressBar', '0%');
  }

  clickStart(){
    this.router.navigate(['/Question1']);
  }

}
