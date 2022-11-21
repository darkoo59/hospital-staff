export class Blood {
    bloodId: number = 0;
    bloodType: string = '';
    quantityInLiters: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.bloodId = obj.bloodId;
            this.bloodType = obj.bloodType;
            this.quantityInLiters = obj.quantityInLiters;
        }
    }
}
