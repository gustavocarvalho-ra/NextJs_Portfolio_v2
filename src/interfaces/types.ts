import { IconType } from "react-icons";

export interface Tec {
  id: string;
  name: string;
  icon: React.ReactElement<IconType>;
}

export interface Pro {
  id: number;
  name: string;
  photo: string;
  linkUrl: string;
  description: string;
  subDescription: string;
}
