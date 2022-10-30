export class Building {
    id: string = "";
    name: string = '';
    numberOfFloors: number = 0;

    public constructor(id: string, name: string, numberOfFloors: number) {
        this.id = id;
        this.name = name;
        this.numberOfFloors = numberOfFloors;
    }
}