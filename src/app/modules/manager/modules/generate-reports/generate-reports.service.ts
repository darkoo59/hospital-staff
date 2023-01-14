import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface GenerateReportDTO {
  dateFrom: Date;
  dateTo: Date;
}

@Injectable({
  providedIn: 'root'
})
export class GenerateReportsService {

constructor(private http: HttpClient) { }

  public GenerateUrgentReport(dto: GenerateReportDTO) : Observable<boolean> {
    return this.http.post<boolean>(`${environment.integrationApiUrl}/UrgentOrder`, dto);
  }

  public GenerateTenderReport(dto: GenerateReportDTO) : Observable<any> {
    return this.http.post(`${environment.integrationApiUrl}/EquipmentTender/report`, dto, { responseType: 'arraybuffer'});
  }
}
