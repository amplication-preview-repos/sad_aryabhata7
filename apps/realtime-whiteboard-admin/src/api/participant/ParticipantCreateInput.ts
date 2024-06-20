import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantCreateInput = {
  room?: RoomWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
