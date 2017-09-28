import { Restaurant } from './../domain/restaurant';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RestaurantsDataService } from '../services/restaurants-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  // Define a restaurants property to hold our user data
  restaurantsList: any;

  constructor(
    private _restaurantsDataService: RestaurantsDataService,
    private toastr: ToastsManager,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Access the Data Service's getRestaurants() method.
    this._restaurantsDataService.getRestaurants().then(
      res => {
        this.restaurantsList = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}

  onSelect(restaurantId: string): void {
    this.toastr.info('Just some information for you.');
    this.router.navigate(['/restaurant', restaurantId]);
  }
}
