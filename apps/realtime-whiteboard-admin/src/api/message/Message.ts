import { Room } from "../room/Room";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  messageSender: string | null;
  room?: Room | null;
  sender: string | null;
  updatedAt: Date;
};
