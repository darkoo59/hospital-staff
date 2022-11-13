import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalMapComponent } from './modules/hospital/hospital-map/hospital-map.component';
import { HospitalFloorComponent } from './modules/hospital/hospital-floor/hospital-floor.component';
import { RoomsMapComponent } from './modules/hospital/rooms-map/rooms-map.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EquipmentSearchComponent } from "./modules/hospital/equipment-search/equipment-search.component";


@NgModule({
  declarations: [
    AppComponent,
    HospitalMapComponent,
    HospitalFloorComponent,
    RoomsMapComponent,
    EquipmentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
