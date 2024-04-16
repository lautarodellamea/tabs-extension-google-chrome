
import { useGroups } from "../hooks/useGroups"


interface SettingsGroupItemProps {
  id: number
  title: string


}
export const SettingsGroupItem = ({ id, title }: SettingsGroupItemProps) => {

  const { deleteTabToGroup, groupSelected, handleModalSettingsGroup } = useGroups()

  const handleDeleteTabToGroup = (id: number) => {
    deleteTabToGroup(groupSelected.id, id)

    handleModalSettingsGroup()
  }



  return (

    <div className="group-settings-item-modal" >

      <p className="group-settings-item-modal__title">{title}</p>

      <button className="group-item__btn" onClick={() => handleDeleteTabToGroup(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>


    </div>

  )
}