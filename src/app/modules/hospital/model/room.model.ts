export class Room {
    roomId: number = 0;
    number: string = '';
    floor: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.roomId = obj.roomId;
            this.number = obj.number;
            this.floor = obj.floor;        
        }
    }
}