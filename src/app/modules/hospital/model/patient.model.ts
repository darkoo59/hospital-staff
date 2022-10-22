export class Patient {
    patientId: number = 0;
    name: string = '';
    surname: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.patientId = obj.id;
            this.name = obj.name;
            this.surname = obj.surname;        
        }
    }
}