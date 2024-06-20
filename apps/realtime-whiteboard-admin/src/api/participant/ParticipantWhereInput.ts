import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantWhereInput = {
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
