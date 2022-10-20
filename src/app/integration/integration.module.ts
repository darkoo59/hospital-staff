import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { IntegrationRoutingModule } from "./integration-routing.module";
import { IntegrationComponent } from "./integration.component";
import { IntRegisterComponent } from "./register/int-register.component";

@NgModule({
  declarations: [
    IntegrationComponent, 
    IntRegisterComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: []
})
export class IntegrationModule { } 