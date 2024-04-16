import { useEffect } from "react"

import { useChromeApi, useGroups } from "./hooks";

import { GroupsItems, InputGroup, ModalGroups, SetttingsGroup, Tabs } from "./components";






function App() {


  const { groupsState, deleteAllGroups, setAllGroups, modalGroup } = useGroups()
  const { getGroupsFromLocalStorage, getTabs, setTabs, tabs } = useChromeApi()



  // obtenemos las pestañas abiertas y los grupos del localStorage
  useEffect(() => {
    const fetchTabs = async () => {
      const fetchedTabs = await getTabs();
      setTabs(fetchedTabs);
    };

    const fetchGroups = async () => {
      const groups = await getGroupsFromLocalStorage();
      setAllGroups(groups)
    };


    fetchTabs();
    fetchGroups();


  }, [getTabs, setTabs, setAllGroups, getGroupsFromLocalStorage]);


  // renderizamos cuando groupsState cambia
  useEffect(() => {

  }, [groupsState, modalGroup])


  function deleteAll() {

    const confirmation = window.confirm('¿Estas seguro de que quieres borrar todos los grupos?');

    if (!confirmation) return

    deleteAllGroups()

    chrome.storage.local.clear(function () {
      console.log('Storage local de la extensión limpiado');
    });
  }





  return (
    <>
      <h1 className="title-h1">Hello Tabs</h1>

      <InputGroup />

      <ModalGroups />
      <SetttingsGroup />


      <GroupsItems groups={groupsState} />

      <Tabs tabs={tabs} />

      {(groupsState?.length > 0) && <button className="input-group__button--red" onClick={deleteAll}>Eliminar todos los grupos</button>}

      <footer>
        <p>Desarrollado por <a href="https://lautarodellamea.com.ar/" target="_blank">Lautaro Della Mea</a></p>
      </footer>

    </>
  )
}

export default App
