import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Message {
  id: number;
  type: string;
  description: string;
  user: string;
  date: string;
  status: string;
}

interface MessagesState {
  messages: Message[];
  fetchMessages: () => Promise<void>;
}

export const useMessagesStore = create<MessagesState>()(
  immer((set) => ({
    messages: [],
    fetchMessages: async () => {
      const response = await fetch("http://localhost:3001/messages");
      const messages = (await response.json()) as Message[];
      set({ messages: messages });
    },
  }))
);
