import { Room } from "./room.model";

export class RoomMap {
    room: Room;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;

    public constructor(room: Room, x: number, y: number, width: number, height: number) {
        this.room = room;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}