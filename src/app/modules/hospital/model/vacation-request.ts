export class VacationRequest {
    vacationRequestId : number = 0;
    startDate: Date = new Date();
    endDate: Date = new Date();
    doctorId: number = 0;
    status: string = "";
    urgency: string = "";
    reason: string = "";

    public constructor(obj?: any) {
        if (obj) {
            
            this.vacationRequestId = obj.VacationRequestId;
            this.startDate = obj.StartDate;
            this.endDate = obj.Enddate;
            this.doctorId = obj.DoctorId;
            this.status = obj.Status;
            this.urgency = obj.Urgency;
            this.reason = obj.Reason;      
        }
    }
}