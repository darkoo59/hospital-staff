import { DatePipe, Time } from "@angular/common";
import { Patient } from "./patient";

export class Appointment 
{
    id: number = 0;
    patientName: Patient["name"] = "";
    //dateTime: DatePipe = DatePipe.toString;
    
    public constructor(obj?: any)
    {
        if (obj) {
            this.id = obj.id;
            this.patientName = obj.patientName;     
        }  
    }
}