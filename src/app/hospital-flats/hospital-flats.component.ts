import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-hospital-flats',
  templateUrl: './hospital-flats.component.html',
  styleUrls: ['./hospital-flats.component.scss']
})
export class HospitalFlatsComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
   }

  private id: any;
  private svg: any;
  private width = 1000;
  private height = 800;

  ngOnInit(): void {
    this.createSvg();
    this.createRect();
  }

  private createSvg(): void {
    this.svg = d3.select("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .attr("class", "svg-container");
  }

  private createRect(): void{
    
    var rect = this.svg.append("a")
    .attr("xlink:href", "hospitalMap/hospital/1")
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 1000)
    .attr("height", 250)
    .attr("fill", "#DEDFE1")
    .attr("stroke", "black")
    .on("mouseover", function(){
      d3.select("rect")
        .attr("fill", "#c2c3c4")
        .style("cursor", "pointer")
    })
    .on("mouseout", function(){
      d3.select("rect")
        .transition()
        .duration(500)
        .attr("fill", "#DEDFE1")
        .style("cursor", "default")
    });


    var rect2 = this.svg.append("rect")
    .attr("x", 0)
    .attr("y", 250)
    .attr("width", 1000)
    .attr("height", 250)
    .attr("fill", "#DEDFE1")
    .attr("stroke", "black");
    
    this.svg.append("text")
    .attr("x", 50)
    .attr("y", 50)
    .text("Bolnica")
    .attr("class", "object-text");
  }


}
