import { Room } from './room.model';
import { Doctor } from './doctor.model';


export class Consilium {

    consiliumId: number = 0;
    topic: string = '';
    dateRangeStart: Date = new Date();
    dateRangeEnd: Date = new Date();
    startTime: Date = new Date();
    duration : number = 0;
    roomId : number = 0;
    room : Room = new Room(); 
    doctorIds : number[] = [];
    doctors : string = '';
    specializationIds : number[] = [];


    public constructor(obj?: any) {
        if (obj) {
            
            this.consiliumId = obj.consiliumId;
            this.topic = obj.topic;
            this.dateRangeStart = obj.dateRangeStart;
            this.dateRangeEnd = obj.dateRangeEnd;
            this.startTime = obj.startTime;
            this.duration = obj.duration;
            this.roomId = obj.roomId;
            this.doctorIds = obj.doctorsIds;
            this.specializationIds = obj.specializationIds;    
            this.doctors =''
        }
    }
}