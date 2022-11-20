import { Component, OnInit } from '@angular/core';
import { Equipment } from '../model/equipment.model';
import { EquipmentService } from '../services/equipment.service';
import { RoomMapService } from '../services/room-map.service';


@Component({
  selector: 'app-equipment-search',
  templateUrl: './equipment-search.component.html',
  styleUrls: ['./equipment-search.component.css']
})
export class EquipmentSearchComponent implements OnInit {

  constructor(private roomMapService: RoomMapService, private equipmentService: EquipmentService) { }

  
  searchText! : string;
  equipment : Equipment[] = [];

  ngOnInit(): void {
    this.equipmentService.getAllEquipment().subscribe(res => {
      this.equipment = res;
    })
  }

}
