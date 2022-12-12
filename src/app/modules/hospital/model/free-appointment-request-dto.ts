
export class FreeAppointmentRequestDTO {
    firstRoomId: number = 0;
    secondRoomId: number = 0;
    wantedStartDate?: Date | null;
    wantedEndDate?: Date | null;
    duration: number = 0;
    durationTimeUnit: string = "";
}