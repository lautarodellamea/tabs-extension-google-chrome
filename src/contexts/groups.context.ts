import { createContext } from "react";
import { Group, Groups } from "../interfaces/groups.interfaces";

interface GroupsContextPops {
  groupsState: Groups,
  addGroup: (group: Group) => void
  deleteAllGroups: () => void
  deleteGroup: (id: number) => void
  setAllGroups: (groups: Groups) => void
  handleModalGroup: () => void
  modalGroup: boolean
  handleTabSelected: (id: number, url: string, title: string) => void
  tabSelected: { id: number, url: string, title: string }
  addTabToGroup: (groupId: number, id: number, title: string, url: string) => void
  handleGroupSelected: (id: number) => void
  groupSelected: Group
  modalSettingsGroup: boolean
  handleModalSettingsGroup: () => void
  deleteTabToGroup: (groupId: number, id: number) => void

}


export const GroupsContext = createContext<GroupsContextPops>({} as GroupsContextPops);