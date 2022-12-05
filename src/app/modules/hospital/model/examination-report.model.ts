import { Recipe } from "./recipe.model";
import { Symptom } from "./symptom.model";

export class ExaminationReport {
    examinationReportId: number = 0;
    symptoms: Symptom[] = [];
    report: string = '';
    recipes: Recipe[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.examinationReportId = obj.examinationReportId;
            this.symptoms = obj.symptoms;
            this.report = obj.report;
            this.recipes = obj.recipes;
        }
    }
}
