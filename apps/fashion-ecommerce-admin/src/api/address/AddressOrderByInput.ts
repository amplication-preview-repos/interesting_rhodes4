import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
};
