export class Building {
    id: number = 0;
    name: string = '';
    numberOfFloors: number = 0;

    public constructor(id: number, name: string, numberOfFloors: number) {
        this.id = id;
        this.name = name;
        this.numberOfFloors = numberOfFloors;
    }
}