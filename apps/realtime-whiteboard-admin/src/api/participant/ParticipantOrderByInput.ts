import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
