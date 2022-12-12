
export class MoveRequest {
    type: string = "";
    firstRoomId: number = 0;
    secondRoomId: number = 0;
    chosenStartDate?: Date | null;
    duration: number = 0;
    durationTimeUnit: string = "";
    equipment: string = "";
    quantity: number = 0;
}