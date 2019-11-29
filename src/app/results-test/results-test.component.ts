import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { bounce, flash, pulse, rubberBand, shake, tada, wobble, jello, bounceInUp, jackInTheBox, hinge,
  rollIn, zoomIn, slideInDown, fadeOut, bounceInLeft, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-results-test',
  templateUrl: './results-test.component.html',
  styleUrls: ['./results-test.component.css'],
  animations:[
    trigger('bounce', [transition('* => *', useAnimation(bounceInDown,{
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 3, delay: 0 }
      }))])
  ]
})
export class ResultsTestComponent implements OnInit {

  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  isCorrectAnswer2: Boolean;
  isCorrectAnswer3: Boolean;
  isCorrectAnswer4: Boolean;
  modalRef: any;
  modalService: any;

  constructor(private router: Router) { 
    this.answer1 = "";
    this.answer2 = "";
    this.answer3 = "";
    this.answer4 = "";
    this.isCorrectAnswer2 = false;
    this.isCorrectAnswer3 = false;
    this.isCorrectAnswer4 = false;
  }

  ngOnInit() {
    this.answer1 = localStorage.getItem('Answer1');
    this.answer2 = localStorage.getItem('Answer2');
    this.answer3 = localStorage.getItem('Answer3');
    this.answer4 = localStorage.getItem('Answer4');

    /*Validation 2nd Answer*/
    let arrayAnswers2 = this.answer2.split(" ", 5)
    if(arrayAnswers2.includes('AngularJS') && arrayAnswers2.includes('Ember') && arrayAnswers2.includes('VueJS') 
        && !arrayAnswers2.includes('Java')  && !arrayAnswers2.includes('C#')){
          this.isCorrectAnswer2 = true;
    }
    else{
      this.isCorrectAnswer2 = false;
    }

    /*Validation 3rd Answer*/
    if (this.answer3 == this.answer3.split('').reverse().join('')){
      this.isCorrectAnswer3 = true;
    }
    else{
      this.isCorrectAnswer3 = false;
    }

    /*Validation 4th Answer*/
    let arrayAnswers4 = this.answer4.split(" ", 2);
    let reverseSentenceAnswer4 = arrayAnswers4.pop();
    let sentenceAnswer4 = arrayAnswers4.pop();
    if(sentenceAnswer4.split('').reverse().join('') == reverseSentenceAnswer4.split('').join('')){
      this.isCorrectAnswer4 = true;
    }
    else{
      this.isCorrectAnswer4 = false;
    }
    console.log(this.answer1);
    console.log(this.answer2);
    console.log(this.answer3);
    console.log(this.answer4);
  }

  clickDisplayListRestaurants(){
    this.router.navigate(['/ListRestaurants']);
  }

}
