import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { PageNotFoundComponent } from './NotFound.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'restaurant', component: RestaurantDetailsComponent },
  { path: 'restaurant/:restaurantId', component: RestaurantDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
