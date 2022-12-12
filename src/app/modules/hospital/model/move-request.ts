
export class MoveRequest {
    id: number = 0;
    type: string = "";
    firstRoomId: number = 0;
    secondRoomId: number = 0;
    chosenStartTime?: Date | null;
    duration: number = 0;
    durationTimeUnit: string = "";
    equipment: string = "";
    quantity: any;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.type = obj.type;
            this.firstRoomId = obj.fromRoomId;
            this.secondRoomId = obj.toRoomId;
            this.equipment = obj.equipment;
            this.quantity = obj.quantity;
            this.chosenStartTime = obj.chosenStartTime;
            this.quantity = obj.quantity;
        }
    }
}