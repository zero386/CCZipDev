import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { bounce, flash, pulse, rubberBand, shake, tada, wobble, jello, bounceInUp, jackInTheBox, hinge,
  rollIn, zoomIn, slideInDown, fadeOut, bounceInLeft, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css'],
  animations:[
    trigger('bounce', [transition('* => *', useAnimation(bounceInDown,{
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 3, delay: 0 }
      }))])
  ]
})
export class Question2Component implements OnInit {

  answer2 : Array<string>;
  constructor(private router: Router) { 
    this.answer2 = [];
  }
    
  ngOnInit() {

  }


  clickNextQuestion(){
    if(this.answer2.length == 0){
      console.log('Please Select Some Options Below');
    }
    else{
      console.log(this.answer2);
      let allAnswers2 = "";
      this.answer2.forEach(element => {
        allAnswers2+=' '+element;
      });
      localStorage.setItem('Answer2', allAnswers2);
      this.router.navigate(['/Question3']);
    }
  }

  checkBoxValue(event){
    this.answer2.push(event.target.value);
  }

}
