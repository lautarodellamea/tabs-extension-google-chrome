import { Tab } from "./tabs.interfaces";

export interface Group {
  id: number;
  title: string;
  tabs: Tab[];
}

export interface Groups extends Array<Group> { }