export interface BloodRequest {
  id: number;
  bloodType: string;
  quantityInLiters: number;
  reasonForRequest: string;
  finalDate: Date;
  doctor: {
    id: number;
    name: string;
    surname: string;
  }
}