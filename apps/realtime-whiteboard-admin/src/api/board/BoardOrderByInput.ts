import { SortOrder } from "../../util/SortOrder";

export type BoardOrderByInput = {
  boardOwner?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
};
