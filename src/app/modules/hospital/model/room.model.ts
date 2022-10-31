export class Room {
    roomId: number = 0;
    number: string = '';
    floor: number = 0;
    buildingId: string = "";
    description: string = "";
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.roomId = obj.roomId;
            this.number = obj.number;
            this.floor = obj.floorId;
            this.buildingId = obj.buildingId;
            this.description = obj.description;
        }
    }
}