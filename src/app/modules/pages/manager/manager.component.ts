import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';
import { Feedback } from 'src/app/modules/pages/manager/feedback';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(private managerService : ManagerService) { 
  }
  public publicFeedbacks: Feedback[] = [];
  public privateFeedbacks: Feedback[] = [];

  publish(feedback: Feedback): void{
    feedback.isDisplayedPublic = true;
    this.managerService.publish(feedback).subscribe(res=>{
      const index = this.publicFeedbacks.indexOf(feedback);
      this.publicFeedbacks.splice(index, 1);
    });
  }
  ngOnInit(): void {
    this.managerService.getPrivateFeedbacks().subscribe(response =>{
      this.privateFeedbacks = response;
    })
    this.managerService.getPublicFeedbacks().subscribe(response =>{
      this.publicFeedbacks = response;
    })
  }

}
