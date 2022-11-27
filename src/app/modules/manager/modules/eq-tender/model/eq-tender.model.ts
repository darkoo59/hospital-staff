export interface EqRequirement {
  item: string;
  amount: number;
}

export interface EqTender {
  title: string;
  requirements: EqRequirement[];
}