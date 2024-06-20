import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "messageSender";

export const MessageTitle = (record: TMessage): string => {
  return record.messageSender?.toString() || String(record.id);
};
