import { Bed } from "./bed.model";

export class Room {
    roomId: number = 0;
    number: string = '';
    floor: number = 0;
    type: string = '';
    buildingId: string = "";
    description: string = "";
    beds: Bed[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.roomId = obj.roomId;
            this.number = obj.number;
            this.floor = obj.floorId;
            this.type = obj.type;
            this.buildingId = obj.buildingId;
            this.description = obj.description;
            this.beds = obj.beds;
        }
    }
}