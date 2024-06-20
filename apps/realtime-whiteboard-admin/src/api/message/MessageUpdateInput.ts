import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  messageSender?: string | null;
  room?: RoomWhereUniqueInput | null;
  sender?: string | null;
};
