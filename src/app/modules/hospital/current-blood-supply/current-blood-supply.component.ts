import { Component, OnInit } from '@angular/core';
import { BloodService } from '../services/blood.service';
import { Router } from '@angular/router';
import { Blood } from '../model/blood.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-current-blood-supply',
  templateUrl: './current-blood-supply.component.html',
  styleUrls: ['./current-blood-supply.component.css']
})
export class CurrentBloodSupplyComponent implements OnInit {

  constructor(private bloodService: BloodService, private router: Router) { }

  public bloods: Blood[] = [];
  public dataSource = new MatTableDataSource<Blood>();
  public displayedColumns = ['bloodType','quantityInLiters',];

  ngOnInit(): void {
    this.bloodService.getBloods().subscribe(res => {
      this.bloods = res;
      this.dataSource.data = this.bloods;
    });
  }

}
