export class Room {
    id: number = 0;
    number: string = '';
    floor: number = 0;
    buildingId: string = "A";
    description: string = "";
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.number = obj.number;
            this.floor = obj.floorId;
            this.buildingId = obj.buildingId;
            this.description = obj.description;
        }
    }
}