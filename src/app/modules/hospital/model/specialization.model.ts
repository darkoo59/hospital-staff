export class Specialization {
    
    specializationId: number = 0;
    name: string = '';


    public constructor(obj?: any) {
        if (obj) {
            this.specializationId = obj.specializationId;
            this.name = obj.name;        
        }
    
    }
}