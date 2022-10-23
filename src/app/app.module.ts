import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalMapComponent } from './hospital-map/hospital-map.component';
import { HospitalFlatsComponent } from './hospital-flats/hospital-flats.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalMapComponent,
    HospitalFlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
