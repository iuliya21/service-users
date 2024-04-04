import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { IMessage } from "../types/types";

interface MessagesState {
  messages: IMessage[];
  fetchMessages: () => Promise<void>;
}

export const useMessagesStore = create<MessagesState>()(
  immer((set) => ({
    messages: [],
    fetchMessages: async () => {
      const response = await fetch("http://localhost:3001/messages");
      const messages = (await response.json()) as IMessage[];
      set({ messages: messages });
    }
  }))
);
