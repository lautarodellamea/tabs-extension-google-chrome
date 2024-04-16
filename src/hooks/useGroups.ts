import { useContext } from "react"
import { GroupsContext } from "../contexts/groups.context"

export const useGroups = () => {

  const { addGroup, groupsState, deleteAllGroups, deleteGroup, setAllGroups, handleModalGroup, modalGroup, handleTabSelected, tabSelected, addTabToGroup, handleGroupSelected, groupSelected, handleModalSettingsGroup, modalSettingsGroup, deleteTabToGroup } = useContext(GroupsContext)








  return { addGroup, groupsState, deleteAllGroups, deleteGroup, handleModalGroup, modalGroup, setAllGroups, handleTabSelected, tabSelected, addTabToGroup, handleGroupSelected, groupSelected, handleModalSettingsGroup, modalSettingsGroup, deleteTabToGroup }
}
