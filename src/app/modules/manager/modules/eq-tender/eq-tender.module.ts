import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { PageLoaderModule } from "../../components/page-loader/page-loader.module";
import { TenderItemListComponent } from "./components/tender-item-list/tender-item-list.component";
import { TenderListComponent } from "./components/tender-list/tender-list.component";
import { EqTenderRoutingModule } from "./eq-tender-routing.module";
import { EqTenderComponent } from "./eq-tender.component";
import { AllEqTendersComponent } from "./pages/all-eq-tenders.component";
import { CreateNewComponent } from "./pages/create-new/create-new.component";
import { EqTenderService } from "./services/eq-tender.service";

@NgModule({
  providers: [EqTenderService],
  declarations: [
    EqTenderComponent,
    TenderListComponent,
    TenderItemListComponent,
    AllEqTendersComponent,
    CreateNewComponent
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
export class EqTenderModule { }
