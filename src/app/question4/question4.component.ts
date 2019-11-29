import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from  '@angular/forms';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { bounce, flash, pulse, rubberBand, shake, tada, wobble, jello, bounceInUp, jackInTheBox, hinge,
  rollIn, zoomIn, slideInDown, fadeOut, bounceInLeft, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css'],
  animations:[
    trigger('bounce', [transition('* => *', useAnimation(bounceInDown,{
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 3, delay: 0 }
      }))])
  ]
})
export class Question4Component implements OnInit {

  palindromeForm: FormGroup;
  sentenceText : AbstractControl;
  reverseSentenceText : AbstractControl;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.palindromeForm  =  this.formBuilder.group({
      sentence : ['', Validators.compose([Validators.required])],
      reverseSentence : ['', Validators.compose([Validators.required])],
    });
    this.sentenceText = this.palindromeForm.controls['sentence'];
    this.reverseSentenceText = this.palindromeForm.controls['reverseSentence'];
  }

  clickEndTest(){
    let answer4 = this.sentenceText.value + " " +this.reverseSentenceText.value;
    localStorage.setItem('Answer4', answer4);
    this.router.navigate(['/ResultsTest']);
  }

}
