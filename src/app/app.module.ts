import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { HomeComponent } from './home/home.component';
import { ResultsTestComponent } from './results-test/results-test.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    HomeComponent,
    ResultsTestComponent,
    ListRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
