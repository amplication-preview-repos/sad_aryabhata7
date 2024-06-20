import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  boardId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
