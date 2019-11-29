import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { HomeComponent } from './home/home.component';
import { ResultsTestComponent } from './results-test/results-test.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Question1',
    component: Question1Component
  },
  {
    path: 'Question2',
    component: Question2Component
  },
  {
    path: 'Question3',
    component: Question3Component
  },
  {
    path: 'Question4',
    component: Question4Component
  },
  {
    path: 'ResultsTest',
    component: ResultsTestComponent
  },
  {
    path: 'ListRestaurants',
    component: ListRestaurantsComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
