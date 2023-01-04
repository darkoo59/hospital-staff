import { Room } from "./room.model";

export class RoomMap {
    id: number = 0;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    number: string = '';
    floor: number = 0;
    buildingId: string = "";

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.x = obj.x;
            this.y = obj.y;
            this.width = obj.width;
            this.height = obj.height;
            this.number = obj.number;
            this.floor = obj.floorId;
            this.buildingId = obj.buildingId;
        }
    }
}