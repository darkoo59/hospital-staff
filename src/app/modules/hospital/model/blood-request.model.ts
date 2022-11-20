export class BloodRequest {
    bloodRequestId: number = 0;
    bloodType: string = '';
    quantityInLiters: number = 0;
    reasonForRequest: string = '';
    finalDate: Date = new Date();
    doctorId: number = 1;

    public constructor(obj?: any) {
        if (obj) {
            this.bloodRequestId = obj.bloodRequestId;
            this.bloodType = obj.bloodType;
            this.quantityInLiters = obj.quantityInLiters;
            this.reasonForRequest = obj.reasonForRequest;
            this.finalDate = obj.finalDate;
            this.doctorId = obj.doctorId;
        }
    }

}
