import { Patient } from "./patient";

export class Appointment 
{
    id: number = 0;
    patientName: Patient["name"] = "";
    date: Date = new Date();
    
    public constructor(obj?: any)
    {
        if (obj) {
            this.id = obj.id;
            this.patientName = obj.patientName;
            this.date = obj.date;    
        }  
    }
}