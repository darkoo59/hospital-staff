import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { PageLoaderModule } from "../../components/page-loader/page-loader.module";
import { EqTenderRoutingModule } from "./eq-tender-routing.module";
import { EqTenderComponent } from "./eq-tender.component";
import { EqTenderService } from "./services/eq-tender.service";

@NgModule({
  providers: [EqTenderService],
  declarations: [
    EqTenderComponent
  ],
  imports: [
    CommonModule,
    EqTenderRoutingModule,
    MaterialModule,
    NgLetModule,
    ReactiveFormsModule,
    PageLoaderModule
  ],
  exports: []
})
export class EqTenderModule {
  
}