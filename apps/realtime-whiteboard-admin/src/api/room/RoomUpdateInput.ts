import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";
import { ParticipantUpdateManyWithoutRoomsInput } from "./ParticipantUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  board?: BoardWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutRoomsInput;
  name?: string | null;
  participants?: ParticipantUpdateManyWithoutRoomsInput;
};
