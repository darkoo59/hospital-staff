import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-hospital-map',
  templateUrl: './hospital-map.component.html',
  styleUrls: ['./hospital-map.component.scss']
})
export class HospitalMapComponent implements OnInit {

  constructor() { }

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
    .attr("x", 20)
    .attr("y", 20)
    .attr("width", 400)
    .attr("height", 700)
    .attr("fill", "#DEDFE1")
    .attr("stroke", "black")
    .on("click", function(){
      
    })
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
    .attr("x", 650)
    .attr("y", 20)
    .attr("width", 300)
    .attr("height", 600)
    .attr("fill", "#DEDFE1");
    
    this.svg.append("text")
    .attr("x", 50)
    .attr("y", 50)
    .text("Bolnica")
    .attr("class", "object-text");
  }
  
}


