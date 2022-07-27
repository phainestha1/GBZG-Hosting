import { SetStateAction } from "react";
import pohangData from "../data/pohangData.json";

export type JSONTypes = {
  storeName: string;
  phoneNumber: string;
  homepage: string;
  image: string;
  title: string;
  star: number;
  genre: string;
  difficulty: number;
  activity: number;
  horror: number;
  description: string;
  recommendation: string;
};

export function loadJSONData() {
  const JSONData: JSONTypes[] = pohangData;

  return JSONData;
}
