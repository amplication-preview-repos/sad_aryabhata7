import { Room } from "../room/Room";

export type Board = {
  boardOwner: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner: string | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
