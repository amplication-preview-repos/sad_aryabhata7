import { RoomUpdateManyWithoutBoardsInput } from "./RoomUpdateManyWithoutBoardsInput";

export type BoardUpdateInput = {
  boardOwner?: string | null;
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  rooms?: RoomUpdateManyWithoutBoardsInput;
};
