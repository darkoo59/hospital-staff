import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';
import { Equipment } from '../model/equipment.model';
import { RoomMap } from '../model/room-map.model';
import { Room } from '../model/room.model';
import { EquipmentService } from '../services/equipment.service';
import { RoomMapService } from '../services/room-map.service';
import {ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-rooms-map',
  templateUrl: './rooms-map.component.html',
  styleUrls: ['./rooms-map.component.scss']
})
export class RoomsMapComponent implements OnInit {

  constructor(private roomMapService: RoomMapService, private equipmentService: EquipmentService, private _route: ActivatedRoute) {
    this.buildingId = this._route.snapshot.paramMap.get('id');
    this.floorId = this._route.snapshot.paramMap.get('floorId');
    this.roomId = this._route.snapshot.paramMap.get('roomId');
   }

  private svg: any;
  private svgWidth = 1000;
  private svgHeight = 800;
  private rooms: RoomMap[] = [];

  @ViewChild(MatTable) equipmentTable!: MatTable<any>;
  displayedColumns = ['name', 'quantity'];

  buildingId: any = "A";
  floorId: any = 1;
  roomId!: any;
  selectedRoom: Room = new Room();
  selectedRoomEquipment: Equipment[] = [];

  ngOnInit(): void {

    if (this.buildingId == "A"){
      this.svgWidth = 400;
      this.svgHeight = 790;
    }
    else if(this.buildingId == "B"){
      this.svgWidth = 1000;
      this.svgHeight = 800;
    }

    this.roomMapService.getRoomsByBuildingFloor(this.buildingId, this.floorId).subscribe(res => {
      this.rooms = res;
      this.createSvg();
      this.createRect(this.rooms, this.selectedRoom, this.selectedRoomEquipment, this.equipmentTable, this.roomId);
    });

    if(this.roomId != null){
      this.equipmentService.getEquipmentByRoomId(this.roomId).subscribe((res: any) => {
        this.selectedRoomEquipment.splice(0,this.selectedRoomEquipment.length);
        this.selectedRoomEquipment.push(...res);
        this.equipmentTable.renderRows();
      })
    }
    
  }

  private createSvg(): void {
    this.svg = d3.select("svg")
    .attr("width", this.svgWidth)
    .attr("height", this.svgHeight)
    .attr("class", "svg-container");
  }

  private createRect(rooms: RoomMap[], selectedRoom: Room, selectedRoomEquipment: Equipment[], table: any, roomId: any): void{
    var service = this.equipmentService;
    var rect = this.svg.selectAll("rect")
    .data(rooms)
    .enter()
    .append("a")
    .append("rect")
    .attr("x", function(d: any, i: any){
      return d.x;
    })
    .attr("y", function(d: any, i: any){
      return d.y;
    })
    .attr("width", function(d: any, i: any){
      return d.width;
    })
    .attr("height", function(d: any, i: any){
      return d.height;
    })
    .attr("fill", function(d: any){
      if(roomId == d.id){
        return "#bcbec2";
      }
      return "#DEDFE1";
    })
    .attr("stroke", function(d: any){
      if(roomId == d.id){
        return "#673AB7";
      }
      return "black";
    })
    .attr("stroke-width", function(d: any){
      if(roomId == d.id){
        return "3";
      }
      return "1";
    })
    .on("mouseover", function(this: any, d: any, i: any){
      d3.select(this)
        .attr("fill", "#c2c3c4")
        .style("cursor", "pointer");
    })
    .on("mouseout", function(this: any){
      d3.select(this)
        .transition()
        .duration(500)
        .attr("fill", "#DEDFE1")
        .style("cursor", "default");
    })
    .on("click", function(this: any, d: any, i: any){
      console.log(i);
      console.log(i.floor);
      selectedRoom.number = i.number;
      selectedRoom.buildingId = i.buildingId;
      selectedRoom.floor = i.floor;
      selectedRoom.description = i.description;

      service.getEquipmentByRoomId(i.id).subscribe((res: any) => {
        selectedRoomEquipment.splice(0,selectedRoomEquipment.length);
        selectedRoomEquipment.push(...res);
        table.renderRows();
      })

    });


    this.svg.selectAll("text")
    .data(rooms)
    .enter()
    .append("text")
    .attr("x", function(d: any, i: any){
      return d.x + d.width / 2
    })
    .attr("y", function(d: any, i: any){
      return d.y + d.height / 2
    })
    .attr("font-family", "Montserrat")
    .attr("font-size", "24px")
    .attr("font-weight", "700")
    .text(function(d: any, i: any)
    {
      return d.number;
    })
    .style("text-anchor", "middle");
  }

}
