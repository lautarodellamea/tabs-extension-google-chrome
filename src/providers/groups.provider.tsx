import { useReducer, useState } from "react";
import { GroupsContext } from "../contexts/groups.context"
import { Group, Groups } from '../interfaces/groups.interfaces';
import { groupsReducer } from "../reducers/groups.reducer"



interface GroupsProviderProps {
  children: JSX.Element | JSX.Element[]
}







export const GroupsProvider = ({ children }: GroupsProviderProps) => {

  const initialState: Groups = []

  const [groupsState, dispatch] = useReducer(groupsReducer, initialState);

  const [modalGroup, setModalGroup] = useState(false)
  const [modalSettingsGroup, setModalSettingsGroup] = useState(false)
  const [tabSelected, setTabSelected] = useState({ id: 0, url: "", title: "" })
  const [groupSelected, setGroupSelected] = useState({} as Group)


  const handleGroupSelected = (id: number) => {
    const group = groupsState.find(group => group.id === id)
    setGroupSelected(group!)
    console.log(groupSelected)
  }

  const handleTabSelected = (id: number, url: string, title: string) => {
    const idUnique = Date.now()
    id = idUnique
    setTabSelected({ id, url, title })
  }


  const handleModalGroup = () => {
    if (groupsState.length === 0) {

      alert("No hay grupos creados, por favor crea un grupo y luego intenta añadir la pestaña.")
      return
    }
    setModalGroup(!modalGroup)
    console.log(modalGroup)
  }


  const handleModalSettingsGroup = () => {
    setModalSettingsGroup(!modalSettingsGroup)
  }

  const setAllGroups = (groups: Groups) => {
    dispatch({ type: "SET_GROUPS", payload: groups })
  }

  const addGroup = (group: Group) => {


    if (!group.title.trim()) {
      alert("Escribe el nombre del grupo, por favor.")
      return
    }

    chrome.storage.local.get('groups', function (result) {
      const groupsInStorage = result.groups || [];

      groupsInStorage.push(group);

      chrome.storage.local.set({ 'groups': groupsInStorage }, function () {
        console.log('Datos actualizados en el almacenamiento local.');
      });

    });

    dispatch({ type: "ADD_GROUP", payload: group })
  }

  const deleteAllGroups = () => {

    dispatch({ type: "DELETE_ALL_GROUPS" })
  }

  const deleteGroup = (id: number) => {

    dispatch({ type: "DELETE_GROUP", payload: id })

    chrome.storage.local.get('groups', function (result) {
      const groupsInStorage = result.groups || [];
      const updatedGroups = groupsInStorage.filter((group: Group) => group.id !== id);
      chrome.storage.local.set({ 'groups': updatedGroups }, function () {
        console.log('Grupos actualizados en el almacenamiento local.');
      });
    });
  }

  const addTabToGroup = (groupId: number, id: number, title: string, url: string) => {
    dispatch({ type: "ADD_TAB_TO_GROUP", payload: { groupId, id, title, url } })
    chrome.storage.local.get('groups', function (result) {
      const groupsInStorage = result.groups || [];
      const updatedGroups = groupsInStorage.map((group: Group) => {
        if (group.id === groupId) {
          return {
            ...group,
            tabs: [...group.tabs, { groupId, id, title, url }]
          };
        }
        return group;
      });
      chrome.storage.local.set({ 'groups': updatedGroups }, function () {
        console.log('Grupos actualizados en el almacenamiento local.');
      });
    })
  }

  const deleteTabToGroup = (groupId: number, id: number) => {


    dispatch({ type: "DELETE_TAB_TO_GROUP", payload: { groupId, id } })

    chrome.storage.local.get('groups', function (result) {
      const groupsInStorage = result.groups || [];
      const updatedGroups = groupsInStorage.map((group: Group) => {
        if (group.id === groupId) {
          return {
            ...group,
            tabs: group.tabs.filter((tab) => tab.id !== id)
          };
        }
        return group;
      });
      chrome.storage.local.set({ 'groups': updatedGroups }, function () {
        console.log('Grupos actualizados en el almacenamiento local.');
      });
    })
  }


  return (
    <GroupsContext.Provider value={{ groupsState, addGroup, deleteAllGroups, deleteGroup, setAllGroups, handleModalGroup, modalGroup, handleTabSelected, tabSelected, addTabToGroup, handleGroupSelected, groupSelected, handleModalSettingsGroup, modalSettingsGroup, deleteTabToGroup }}>{children}</GroupsContext.Provider>
  )
}