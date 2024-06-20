import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type BoardWhereInput = {
  boardOwner?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
};
