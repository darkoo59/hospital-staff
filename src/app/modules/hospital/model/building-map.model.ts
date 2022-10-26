import { Building } from "./building.model";

export class BuildingMap {
    building: Building;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;

    public constructor(building:Building, x: number, y: number, width: number, height: number) {
        this.building = building;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}