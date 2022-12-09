import { Component, Input } from "@angular/core";
import { TenderOffer } from "../../../model/tender-application.model";

@Component({
  selector: 'offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent { 
  @Input() i_Items: TenderOffer[] = [];
  m_ColsShow: string[] = ['name', 'amount', 'cost'];
}