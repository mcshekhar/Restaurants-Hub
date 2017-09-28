import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule,
         MdTableModule,
         MdButtonModule,
         MdToolbarModule,
         MdMenuModule,
         MdIconModule } from '@angular/material';
import {DataTableModule,
        SharedModule} from 'primeng/primeng';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDataService } from './services/restaurants-data.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './NotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    routing,
    BrowserAnimationsModule,                                  // <-Add HttpModule
    BrowserModule,
    HttpModule,
    MdCardModule,
    MdTableModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    DataTableModule,
    SharedModule,
    ToastModule.forRoot()
  ],
  providers: [RestaurantsDataService],                     // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
