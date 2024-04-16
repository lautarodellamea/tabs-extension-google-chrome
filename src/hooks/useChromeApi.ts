import { useState } from "react";
import { Tabs } from "../interfaces/tabs.interfaces";


export const useChromeApi = () => {

  const [tabs, setTabs] = useState<Tabs>([])

  const getTabs = async () => {
    const chromeTabs: Tabs = await new Promise((resolve) => {
      chrome.tabs.query({}, (tabs) => {
        resolve(tabs as Tabs);
      });
    });
    return chromeTabs;
  };

  const getGroupsFromLocalStorage = async () => {
    try {
      const response = await chrome.storage.local.get('groups');
      const groups = response.groups || [];
      return groups;
    } catch (error) {
      console.error('Error al obtener grupos del almacenamiento local:', error);
      return [];
    }
  }


  return { getGroupsFromLocalStorage, getTabs, setTabs, tabs }
}