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
import { VacationRequestsDisplayComponent } from './vacation-requests-display/vacation-requests-display.component';
import { CreateVacationComponent } from './create-vacation/create-vacation.component';
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HospitalComponent } from "./hospital.component";
import { CreateBloodRequestComponent } from './create-blood-request/create-blood-request.component';
import { InpatientTreatmentsComponent } from './inpatient-treatments/inpatient-treatments.component';
import { CreateInpatientTreatmentComponent } from './create-inpatient-treatment/create-inpatient-treatment.component';
import { CreateInpatientTreatmentTherapyComponent } from './create-inpatient-treatment-therapy/create-inpatient-treatment-therapy.component';
import { CreateBloodUsageEvidencyComponent } from "./create-blood-usage-evidency/create-blood-usage-evidency.component";
import { CreateConsiliumComponent } from "./create-consilium/create-consilium.component";
import { ViewConsiliumsComponent } from "./view-consiliums/view-consiliums.component";



const routes: Routes = [
  {
    path: '', component: HospitalComponent, children: [
      { path: 'createconsilium', component: CreateConsiliumComponent },
      { path: 'consiliums', component: ViewConsiliumsComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'rooms/add', component: CreateRoomComponent },
      { path: 'rooms/:id', component: RoomDetailComponent },
      { path: 'rooms/:id/update', component: UpdateRoomComponent },
      { path: 'appointments/add', component: CreateAppointmentComponent },
      { path: 'appointment/:id/update', component: UpdateAppointmentComponent },
      { path: 'blood/request', component: CreateBloodRequestComponent },
      { path: 'inpatient-treatments', component: InpatientTreatmentsComponent },
      { path: 'inpatient-treatments/add', component: CreateInpatientTreatmentComponent },
      { path: 'inpatient-treatment-therapy/add', component: CreateInpatientTreatmentTherapyComponent },
      { path: 'bloodUsageEvidency/add', component: CreateBloodUsageEvidencyComponent },
      { path: '**', redirectTo: 'rooms', pathMatch: 'full' },
      { path: 'vacations', component: VacationRequestsDisplayComponent },
      { path: 'createvacation', component: CreateVacationComponent },
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
    CreateBloodRequestComponent,
    InpatientTreatmentsComponent,
    CreateInpatientTreatmentComponent,
    CreateInpatientTreatmentTherapyComponent,
    CreateBloodUsageEvidencyComponent,
    VacationRequestsDisplayComponent,
    CreateVacationComponent,
    CreateConsiliumComponent,
    ViewConsiliumsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  exports: [RouterModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-EN' }
  ]
})
export class HospitalModule { }
