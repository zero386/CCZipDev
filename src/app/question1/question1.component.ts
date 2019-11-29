import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { bounce, flash, pulse, rubberBand, shake, tada, wobble, jello, bounceInUp, jackInTheBox, hinge,
  rollIn, zoomIn, slideInDown, fadeOut, bounceInLeft, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
  animations:[
    trigger('bounce', [transition('* => *', useAnimation(bounceInDown,{
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 3, delay: 0 }
      }))])
  ]
})
export class Question1Component implements OnInit {

  answer1 : string;
  timeLeft: number = 10;
  interval;
  constructor(private router: Router) {
    this.answer1 = "";
   }

  ngOnInit() {
    
  }

  clickNextQuestion(){
    if(this.answer1 == ""){
      console.log('Please Select One Option');
    }
    else{
      localStorage.setItem('Answer1', this.answer1);
      this.router.navigate(['/Question2']);
    }
  }

  radioButtonValue(event){
    this.answer1 = event.target.value;
  }

}
