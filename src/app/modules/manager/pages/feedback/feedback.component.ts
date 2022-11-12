import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { Feedback } from 'src/app/modules/manager/model/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

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
