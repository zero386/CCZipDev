import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from  '@angular/forms';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { bounce, flash, pulse, rubberBand, shake, tada, wobble, jello, bounceInUp, jackInTheBox, hinge,
  rollIn, zoomIn, slideInDown, fadeOut, bounceInLeft, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css'],
  animations:[
    trigger('bounce', [transition('* => *', useAnimation(bounceInDown,{
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 3, delay: 0 }
      }))])
  ]
})
export class Question3Component implements OnInit {

  palindromeForm: FormGroup;
  palindromeText : AbstractControl;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.palindromeForm  =  this.formBuilder.group({
      palindrome : ['', Validators.compose([Validators.required])],
    });
    this.palindromeText = this.palindromeForm.controls['palindrome'];
  }

  get formControls() { 
    return this.palindromeForm.controls; 
  }

  clickNextQuestion(){
    if(!this.palindromeText.value){
      console.log('Please Type In Palindrome');
    }
    else{
      localStorage.setItem('Answer3', this.palindromeText.value);
      this.router.navigate(['/Question4']);
    }
  }

}
