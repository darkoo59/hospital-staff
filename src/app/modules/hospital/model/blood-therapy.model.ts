export class BloodTherapy {
    bloodTherapyId: number = 0;
    bloodType: string = '';
    quantityInLiters: number = 0;
    start!: Date;
    end!: Date;

    public constructor(obj?: any) {
        if (obj) {
            this.bloodTherapyId = obj.bloodTherapyId;
            this.bloodType = obj.bloodType;
            this.quantityInLiters = obj.quantityInLiters;
            this.start = obj.start;
            this.end = obj.end;
        }
    }
}
