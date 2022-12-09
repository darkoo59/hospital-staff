import { BloodBank } from "../../../model/blood-bank.model";
import { EqTender, TenderItem } from "./eq-tender.model";

export interface TenderOffer {
  id: number;
  cost: number;
  tenderRequirement: TenderItem;
}

export interface TenderApplication {
  id: number;
  note: string;
  totalCost: number;
  equipmentTender: EqTender;
  tenderOffers: TenderOffer[];
  hasWon: boolean;
  user?: BloodBank;
}
