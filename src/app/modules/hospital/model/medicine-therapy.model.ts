export class MedicineTherapy {
    medicineTherapyId: number = 0;
    medicineId: number = 0;
    dosage: string = '';
    start!: Date;
    end!: Date;

    public constructor(obj?: any) {
        if (obj) {
            this.medicineTherapyId = obj.bloodTherapyId;
            this.medicineId = obj.medicineId;
            this.dosage = obj.dosage;
            this.start = obj.start;
            this.end = obj.end;
        }
    }
}
