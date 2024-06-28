export default interface Transaction {
  id: number;
  value: number;
  description: string;
  createdAt: Date;
  type: string;
  status: string;
}
