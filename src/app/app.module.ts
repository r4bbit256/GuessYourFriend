import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdDirective } from './shared/directives/ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { NewAdsComponent } from './new-ads/new-ads.component';

const AngularMaterialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdDirective,
    AdBannerComponent,
    NewAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModules,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
