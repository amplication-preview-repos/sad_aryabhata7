import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";

export type RoomWhereInput = {
  board?: BoardWhereUniqueInput;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  participants?: ParticipantListRelationFilter;
};
