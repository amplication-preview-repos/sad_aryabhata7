import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { MessageCreateNestedManyWithoutRoomsInput } from "./MessageCreateNestedManyWithoutRoomsInput";
import { ParticipantCreateNestedManyWithoutRoomsInput } from "./ParticipantCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  board?: BoardWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutRoomsInput;
  name?: string | null;
  participants?: ParticipantCreateNestedManyWithoutRoomsInput;
};
