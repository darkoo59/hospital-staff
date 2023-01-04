import { Component, Input } from '@angular/core';
import { text } from 'd3';
import { ExaminationReport } from '../model/examination-report.model';
import { ExaminationReportService } from '../services/examination-report.service';

@Component({
  selector: 'app-examination-report-search',
  templateUrl: './examination-report-search.component.html',
  styleUrls: ['./examination-report-search.component.css']
})
export class ExaminationReportSearchComponent {

public examinationReports: ExaminationReport[] = [];

public searchedExaminationReports : ExaminationReport[] = [];

public dataSource : ExaminationReport[] = [];

searchText : String = "";

constructor(private service : ExaminationReportService) {}

public getExaminationReport()
{
  if(this.searchText == "")
  {
    this.dataSource = this.examinationReports; 
  }
  else 
  {
    this.service.getExaminationReport(this.searchText).subscribe(res => {
      this.searchedExaminationReports = res;
        this.dataSource = this.searchedExaminationReports;
    });
  }
}

ngOnInit(): void {
  this.service.getExaminationReports().subscribe(res => {
    this.examinationReports = res;
      this.dataSource = this.examinationReports;
  }); 
}







}
