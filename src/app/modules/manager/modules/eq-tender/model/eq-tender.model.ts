export interface TenderItem {
  name: string;
  amount: number;
}

export interface EqTender {
  title: string;
  expiresOn: Date | null;
  description: string;
  requirements: TenderItem[];
}