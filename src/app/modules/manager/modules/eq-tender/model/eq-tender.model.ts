export interface TenderItem {
  name: string;
  amount: number;
}

export interface EqTender {
  title: string;
  expiresOn: Date;
  description: string;
  requirements: TenderItem[];
}