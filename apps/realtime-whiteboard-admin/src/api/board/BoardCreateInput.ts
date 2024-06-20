import { RoomCreateNestedManyWithoutBoardsInput } from "./RoomCreateNestedManyWithoutBoardsInput";

export type BoardCreateInput = {
  boardOwner?: string | null;
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  rooms?: RoomCreateNestedManyWithoutBoardsInput;
};
