export class Feedback {
    id: number = 0;
    user: string = '';
    textt: string = '';
    date: string = '';
    privatisation: boolean = false;
    isDisplayedPublic: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.user = obj.user;
            this.textt = obj.textt;
            this.date = obj.date;
            this.privatisation = obj.privatisation;
            this.isDisplayedPublic = obj.isDisplayedPublic;
        }
    }
}