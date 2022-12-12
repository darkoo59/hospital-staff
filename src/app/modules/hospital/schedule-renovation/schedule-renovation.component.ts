import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { RoomMapService } from '../services/room-map.service';
import { RoomMap } from '../model/room-map.model';
import {FormGroup, FormControl} from '@angular/forms';
import { FreeAppointmentRequestDTO } from '../model/free-appointment-request-dto';
import { MoveRequest } from '../model/move-request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-renovation',
  templateUrl: './schedule-renovation.component.html',
  styleUrls: ['./schedule-renovation.component.css']
})
export class ScheduleRenovationComponent implements OnInit {

  buildingId: any = "A";
  floorId: any = 0;
  firstRoom: RoomMap = new RoomMap();
  secondRoom: RoomMap = new RoomMap();

  selectedRenovationType = "merging";
  freeAppointmentRequestDTO : FreeAppointmentRequestDTO = new FreeAppointmentRequestDTO();
  freeAppointmentDates?: Date[];
  rooms?: RoomMap[];
  moveRequest: MoveRequest = new MoveRequest();

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private roomMapService: RoomMapService, private _route: ActivatedRoute) { 
    this.buildingId =  this._route.snapshot.paramMap.get('hospitalId');
    this.floorId = this._route.snapshot.paramMap.get('floorId');
  }

  ngOnInit(): void {
    this.roomMapService.getRoomsByBuildingFloor(this.buildingId, this.floorId).subscribe(res => {
      this.rooms = res;
    });    
  }

  findFreeTimeSlots(){
    this.freeAppointmentRequestDTO.firstRoomId = this.firstRoom.id;
    this.freeAppointmentRequestDTO.secondRoomId = this.secondRoom.id;
    this.freeAppointmentRequestDTO.wantedStartDate = this.range.value.start;
    this.freeAppointmentRequestDTO.wantedEndDate = this.range.value.end;
    this.freeAppointmentRequestDTO.durationTimeUnit = "days";

    this.roomMapService.getFreeTimeSlotForRooms(this.freeAppointmentRequestDTO).subscribe(res => {
      this.freeAppointmentDates = res;
    });
  }

  addDays(date: Date) : Date{
    var result = new Date(date);
    result.setDate(result.getDate() + this.freeAppointmentRequestDTO.duration);
    return result;
  }

  scheduleRenovation(startDate: Date){
    this.moveRequest.firstRoomId = this.freeAppointmentRequestDTO.firstRoomId;
    this.moveRequest.secondRoomId = this.freeAppointmentRequestDTO.secondRoomId;
    this.moveRequest.duration = this.freeAppointmentRequestDTO.duration;
    this.moveRequest.durationTimeUnit = this.freeAppointmentRequestDTO.durationTimeUnit;
    this.moveRequest.chosenStartDate = startDate;


    if(this.selectedRenovationType == "merging"){
      this.moveRequest.type = "RenovationMerge";
      this.roomMapService.mergeRooms(this.moveRequest).subscribe(res => {
      });;
    }
    else{
      this.moveRequest.type = "RenovationSplit";
      this.roomMapService.splitRoom(this.moveRequest).subscribe(res => {
      });;
    }


  }

}
