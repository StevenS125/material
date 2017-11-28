import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { AppComponent } from './app.component';
import { CouponDialogComponent } from './components/coupon-dialog';

import { CarrotDetailPage } from './pages/carrot-detail';
import { CheckoutPage } from './pages/checkout';
import { CouponPage } from './pages/coupon';
import { HomePage } from './pages/home';

// Services
import { CarrotService } from './services/carrot.service';

// Routes
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CarrotDetailPage,
    CheckoutPage,
    CouponDialogComponent,
    CouponPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    BrowserAnimationsModule
    ],
  providers: [CarrotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
