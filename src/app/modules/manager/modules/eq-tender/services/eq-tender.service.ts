import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { GenericDataService } from "../../../services/generic-data.service";
import { EqTender } from "../model/eq-tender.model";

@Injectable()
export class EqTenderService extends GenericDataService<EqTender[]> {

  fetchTenders(): Observable<any> {
    const temp: EqTender[] = [
      {
        title: 'Tender 1',
        requirements: [
          {
            item: 'stolice',
            amount: 10
          },
          {
            item: 'kreveti',
            amount: 51
          },
          {
            item: 'stolovi',
            amount: 51
          }
        ]
      },
      {
        title: 'Tender 2',
        requirements: [
          {
            item: 'stolice',
            amount: 31
          },
          {
            item: 'stolovi',
            amount: 25
          },
        ]
      },
      {
        title: 'Tender 3',
        requirements: [
          {
            item: 'stolice',
            amount: 512
          },
          {
            item: 'kreveti',
            amount: 211
          },
          {
            item: 'stolovi',
            amount: 152
          }
        ]
      }
    ];
    this.setData = temp;
    return of(123);
  }
}