import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { IMessage } from "../types/types";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

interface MessagesState {
  messages: IMessage[];
  fetchMessages: () => Promise<void>;
}

export const useMessagesStore = create<MessagesState>()(
  immer((set) => ({
    messages: [],
    fetchMessages: async () => {
      const response = await axiosInstance.get<IMessage[]>("http://localhost:3001/messages");
      set({ messages: response.data });
    }
  }))
);