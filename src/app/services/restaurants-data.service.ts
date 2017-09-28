import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantsDataService {

 constructor(private _http: Http) {}

  getRestaurants() {
    return new Promise((resolve, reject) => {
      this._http
        .get('/api/restaurants')
        .map(res => res.json())
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getRestaurant(restaurantId) {
    return new Promise((resolve, reject) => {
      this._http
        .get('/api/restaurants/' + restaurantId)
        .map(res => res.json())
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
