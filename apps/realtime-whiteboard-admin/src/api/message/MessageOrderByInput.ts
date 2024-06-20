import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messageSender?: SortOrder;
  roomId?: SortOrder;
  sender?: SortOrder;
  updatedAt?: SortOrder;
};
