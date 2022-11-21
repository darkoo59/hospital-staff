export class Medicine {
    medicineId: number = 0;
    name: string = '';
    manufacturer: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.medicineId = obj.medicineId;
            this.name = obj.name;
            this.manufacturer = obj.manufacturer;
        }
    }
}
