import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback.model';


@Injectable()
export class ManagerService {

    route: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }
    
    getPrivateFeedbacks(): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(this.route + 'api/feedbacks/' + '?private=true', {headers: this.headers});
    }

    getPublicFeedbacks(): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(this.route + 'api/feedbacks/' + '?private=false', {headers: this.headers});
    }

    publish(feedback: any): Observable<any> {
        return this.http.put<any>(this.route + 'api/feedbacks/' + feedback.id, feedback, {headers: this.headers});
    }
}
