import { useEffect } from "react"
import { useGroups } from "../hooks/useGroups"
import { SettingsGroupItem } from "./SettingsGroupItem"

export const SetttingsGroup = () => {

  const { groupSelected, modalSettingsGroup, handleModalSettingsGroup } = useGroups()

  const tabs = groupSelected.tabs

  useEffect(() => {


  }, [groupSelected, modalSettingsGroup])


  return (
    <div className={`modal-settings-groups ${modalSettingsGroup ? 'modal-settings-groups--active' : ''}`}>
      <h2 className="title-h2 title-h2--modal">Pestañas del grupo {groupSelected.title}</h2>

      {tabs && tabs.length === 0 && <p>No hay pestañas en este grupo.</p>}

      {tabs && tabs.map((tab) => (
        <SettingsGroupItem key={tab.id} id={tab.id} title={tab.title} />
      ))}

      <button onClick={handleModalSettingsGroup} className="input-group__button--red">Cerrar</button>
    </div>
  )
}