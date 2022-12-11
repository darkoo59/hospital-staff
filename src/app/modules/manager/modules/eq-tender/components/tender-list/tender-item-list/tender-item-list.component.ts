import { Component, Input, ViewChild } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { TenderItem } from "../../../model/eq-tender.model";

@Component({
  selector: 'tender-item-list',
  templateUrl: './tender-item-list.component.html',
  styleUrls: ['./tender-item-list.component.scss']
})
export class TenderItemListComponent {
  @Input() i_Items: TenderItem[] = [];
  @Input() i_Edit: boolean = false;

  m_ColsShow: string[] = ['type', 'amount'];
  m_ColsEdit: string[] = ['type', 'amount', 'delete'];

  @ViewChild(MatTable) m_Table: MatTable<TenderItem> | null = null;

  removeItem(element:any): void {
    if(!this.i_Edit) return;
    const index = this.i_Items.indexOf(element);
    if(index !== -1) {
      this.i_Items.splice(index, 1);
      this.m_Table?.renderRows();
    }
  }
}