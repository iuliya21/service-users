import { ReactElement } from "react";

export interface IMessage {
  id: number;
  type: string;
  description: string;
  user: string;
  date: string;
  status: string;
  image: string
}

export interface IModal {
  children: ReactElement;
  onClosePopup: () => void;
}