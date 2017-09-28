import { RestaurantsDataService } from './../services/restaurants-data.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  selectedRestaurantDetails: any;
  restaurantId: string;

  constructor(
    private _restaurantsDataService: RestaurantsDataService,
    private route: ActivatedRoute,
    private toastr: ToastsManager,
    private router: Router
  ) {
    if (route.snapshot.params['restaurantId'] !== 'undefined') {
      this.restaurantId = route.snapshot.params['restaurantId'];
      // this.route.params.subscribe((params) => this.restaurantId = params.restaurantId);

      if (this.restaurantId != null) {
        this._restaurantsDataService.getRestaurant(this.restaurantId).then(
          res => {
            this.selectedRestaurantDetails = res;
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  }

  ngOnInit() {}
}
