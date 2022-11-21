
export class InpatientTreatment {
    inpatientTreatmentId: number = 0;
    patientId: number = 0;
    reasonForAdmission: string = '';
    roomId: number = 0;
    bedId: number = 0;
    dateOfAdmission: Date = new Date();

    public constructor(obj?: any) {
        if (obj) {
            this.inpatientTreatmentId = obj.inpatientTreatmentId;
            this.patientId = obj.patientId;
            this.reasonForAdmission = obj.reasonForAdmission;
            this.roomId = obj.roomId;
            this.bedId = obj.bedId;
            this.dateOfAdmission = obj.dateOfAdmission;  
        }
    }
}
