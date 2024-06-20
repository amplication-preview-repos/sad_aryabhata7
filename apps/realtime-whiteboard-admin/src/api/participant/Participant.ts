import { Room } from "../room/Room";
import { User } from "../user/User";

export type Participant = {
  createdAt: Date;
  id: string;
  room?: Room | null;
  updatedAt: Date;
  user?: User | null;
};
