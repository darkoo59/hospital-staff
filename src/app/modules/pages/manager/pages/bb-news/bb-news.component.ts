import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BloodBankService, BloodNews } from "../../services/blood-bank.service";

@Component({
  selector: 'app-bb-news',
  templateUrl: './bb-news.component.html',
  styleUrls: ['./bb-news.component.scss']
})
export class BBNewsComponent implements OnInit {
  m_News: Observable<BloodNews[]> = this.m_BloodBankService.m_BloodNews$;

  constructor(private m_BloodBankService: BloodBankService) { }
  
  ngOnInit(): void {
    
  }
  
}