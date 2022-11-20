import { Component, OnInit } from '@angular/core';
import { RoomMap } from '../model/room-map.model';
import { RoomMapService } from '../services/room-map.service';

@Component({
  selector: 'app-rooms-search',
  templateUrl: './rooms-search.component.html',
  styleUrls: ['./rooms-search.component.css']
})
export class RoomsSearchComponent implements OnInit {

  constructor(private roomMapService: RoomMapService) { }

  
  searchText! : string;
  rooms : RoomMap[] = [];

  ngOnInit(): void {
    this.roomMapService.getAllRooms().subscribe(res => {
      this.rooms = res;
    })
  }

}
