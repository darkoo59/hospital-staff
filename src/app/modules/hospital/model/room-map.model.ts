import { Room } from "./room.model";

export class RoomMap {
    roomId: number = 0;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    number: string = '';
    floor: number = 0;
    buildingId: string = "";

    public constructor(obj?: any) {
        if (obj) {
            this.roomId = obj.roomId;
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