import { NonNullAssert } from "@angular/compiler";

export class BloodUsageEvidency {
    bloodUsageEvidencyId: number = 0;
    bloodType: string = '';   
    quantityUsedInMililiters: number = 0;
    reasonForUsage: string ='';
    dateOfUage: Date = new Date()
    doctorId: number =  0;


    public constructor(obj?: any) {
        if (obj) {
            
            this.bloodUsageEvidencyId = obj.BloodUsageEvidency;
            this.bloodType = obj.BloodType;
            this.quantityUsedInMililiters = obj.QuantityUsedInMililiters;
            this.reasonForUsage = obj.ReasonForUsage;
            this.dateOfUage = obj.DateOfUage;
            this.doctorId = obj.DoctorId;
        }
    }
}