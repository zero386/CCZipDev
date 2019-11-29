import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { bounce, flash, pulse, rubberBand, shake, tada, wobble, jello, bounceInUp, jackInTheBox, hinge,
  rollIn, zoomIn, slideInDown, fadeOut, bounceInLeft, bounceInDown, fadeIn } from 'ng-animate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn,{
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 3, delay: 0 }
      }))])
  ]
})
export class AppComponent {

  
  myStyles : any;
  title = 'CCZipDev';

  constructor(){
    this.myStyles = {
      width: '25%'
    };

    //localStorage.setItem('ProgressBar', this.progressBarValue);
  }

}
