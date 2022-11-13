export interface BloodRequest {
  id: number;
  bloodType: string;
  quantityInLiters: number;
  reasonForRequest: string;
  finalDate: Date;
  state: number;
  doctor: {
    id: number;
    name: string;
    surname: string;
  }
}