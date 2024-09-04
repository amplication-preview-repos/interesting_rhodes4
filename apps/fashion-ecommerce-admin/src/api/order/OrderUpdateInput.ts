import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  totalAmount?: number | null;
};
