import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';
import { Room } from '../modules/hospital/model/room.model';
import { RoomService } from '../modules/hospital/services/room.service';

@Component({
  selector: 'app-rooms-map',
  templateUrl: './rooms-map.component.html',
  styleUrls: ['./rooms-map.component.scss']
})
export class RoomsMapComponent implements OnInit {

  constructor(private roomService: RoomService, private _route: ActivatedRoute) {
    this.buildingId = this._route.snapshot.paramMap.get('id');
    this.floorId = this._route.snapshot.paramMap.get('floorId');
   }

  private svg: any;
  private svgWidth = 1000;
  private svgHeight = 800;
  private rooms : Room[] = [];

  private buildingId: any = "1";
  private floorId: any = "A";

  ngOnInit(): void {

    if (this.buildingId == "A"){
      this.svgWidth = 400;
      this.svgHeight = 790;
    }
    else if(this.buildingId == "B"){
      this.svgWidth = 1000;
      this.svgHeight = 800;
    }

    this.roomService.getRoomsByBuildingFloor(this.buildingId, this.floorId).subscribe(res => {
      this.rooms = res;
      this.createSvg();
      this.createRect(this.rooms);
    })
  }

  private createSvg(): void {
    this.svg = d3.select("svg")
    .attr("width", this.svgWidth)
    .attr("height", this.svgHeight)
    .attr("class", "svg-container");
  }

  private createRect(rooms: Room[]): void{
    var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('background', '#f4f4f4')
    .style('padding', '10px 10px')
    .style('border', '1px #333 solid')
    .style('border-radius', '5px')
    .style('opacity', '0')
    .style('z-index', 10)
    .style('white-space', 'pre-wrap')
    .text('a simple tooltip')

    var rect2 = this.svg.selectAll("rect")
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
    .attr("fill", "#DEDFE1")
    .attr("stroke", "black")
    .on("mouseover", function(this: any, d: any, i: any){
      d3.select(this)
        .attr("fill", "#c2c3c4")
        .style("cursor", "pointer")
      tooltip.transition()
        .style('opacity', 1)
        .style('left', (d.pageX - 50)+'px')
        .style('top', (d.pageY)+'px')
        .text("Room number: " + i.number + "\n" + "Flat: " + i.floorId + "\n" + "Building: " + i.buildingId +
        "\n" + "Opis: " + i.description)
    })
    .on("mouseout", function(this: any){
      d3.select(this)
        .transition()
        .duration(500)
        .attr("fill", "#DEDFE1")
        .style("cursor", "default")
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
