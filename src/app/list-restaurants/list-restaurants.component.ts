import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  listRestaurants : Array<any>;
  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    this.dataService.getListRestaurants().subscribe(
      data=>{
        console.log(data);
        this.listRestaurants = [];
        this.listRestaurants.push(data);
        
      }
    );

  }

}
