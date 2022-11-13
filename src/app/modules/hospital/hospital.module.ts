import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { UpdateRoomComponent } from "./update-room/update-room.component";
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { HospitalComponent } from "./hospital.component";
import { CreateBloodUsageEvidencyComponent } from "./create-blood-usage-evidency/create-blood-usage-evidency.component";



const routes: Routes = [
  {
    path: '', component: HospitalComponent, children: [
      { path: 'rooms', component: RoomsComponent },
      { path: 'rooms/add', component: CreateRoomComponent },
      { path: 'rooms/:id', component: RoomDetailComponent },
      { path: 'rooms/:id/update', component: UpdateRoomComponent },
      { path: 'appointments/add', component: CreateAppointmentComponent },
      { path: 'appointment/:id/update', component: UpdateAppointmentComponent },
      { path: 'bloodUsageEvidency/add', component: CreateBloodUsageEvidencyComponent },
      { path: '**', redirectTo: 'rooms', pathMatch: 'full' },
    ]
  }

];

@NgModule({
  declarations: [
    HospitalComponent,
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    CreateBloodUsageEvidencyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-EN' }
  ]
})
export class HospitalModule { }
