export interface Tab {
  groupId: number;
  id: number;
  title: string;
  url: string;
  favIconUrl?: string;
}

export type Tabs = Tab[]

