export interface BloodRequest {
  id: number;
  bloodType: string;
  quantityInLiters: number;
  reasonForRequest: string;
  finalDate: Date;
  state: number;
  reasonForAdjustment?: string;
  doctor: {
    id: number;
    name: string;
    surname: string;
  },
  urgent: boolean
}
