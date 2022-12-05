import { Medicine } from "./medicine.model";

export class Recipe {
    recipeId: number = 0;
    medicines: Medicine[] = [];
    wayOfUse: string = '';
    dateOfIssue: Date = new Date();

    public constructor(obj?: any) {
        if (obj) {
            this.recipeId = obj.recipeId;
            this.medicines = obj.medicines;
            this.wayOfUse = obj.wayOfUse;
            this.dateOfIssue = obj.dateOfIssue;
            
        }
    }
}
