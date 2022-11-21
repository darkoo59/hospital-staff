export class Bed {
    bedId: number = 0;
    label: string = '';
    isAvailable: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.bedId = obj.bedId;
            this.label = obj.label;
            this.isAvailable = obj.isAvailable;
        }
    }
}
