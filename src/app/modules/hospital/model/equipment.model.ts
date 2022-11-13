export class Equipment {
    id: number = 0;
    roomId: number = 0;
    equipmentType: string = "";
    name: string = "";
    quantity: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.roomId = obj.roomId;
            this.id = obj.Id;
            this.equipmentType = obj.EquipmentType;
            this.name = obj.Name;
            this.quantity = obj.Quantity;
        }
    }
}