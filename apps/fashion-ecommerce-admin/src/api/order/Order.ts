import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  totalAmount: number | null;
  updatedAt: Date;
};
