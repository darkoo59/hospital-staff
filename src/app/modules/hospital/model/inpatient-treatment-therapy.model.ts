import { BloodTherapy } from "./blood-therapy.model";
import { MedicineTherapy } from "./medicine-therapy.model";

export class InpatientTreatmentTherapy {
    inpatientTreatmentTherapyId: number = 0;
    inpatientTreatmentId: number = 0;
    medicineTherapies: MedicineTherapy[] = [];
    bloodTherapies: BloodTherapy[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.inpatientTreatmentTherapyId = obj.inpatientTreatmentTherapyId;
            this.inpatientTreatmentId = obj.inpatientTreatmentId;
            this.medicineTherapies = obj.medicineTherapies;
            this.bloodTherapies = obj.bloodTherapies;
        }
    }
}
