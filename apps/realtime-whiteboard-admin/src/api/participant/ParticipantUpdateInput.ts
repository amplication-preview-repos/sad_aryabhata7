import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantUpdateInput = {
  room?: RoomWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
