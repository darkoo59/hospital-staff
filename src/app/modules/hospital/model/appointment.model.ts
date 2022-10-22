export class Appointment {
    id: number = 0;
    patientId: number = 0;
    date: Date = new Date();
    time: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.patientId = obj.patientId;
            this.date = obj.date;
            this.time = '';      
        }
    }
}