
import { useGroups } from "../hooks/useGroups"
import { ModalGroupItem } from "./ModalGroupItem"



export const ModalGroups = () => {

  const { groupsState, modalGroup, handleModalGroup } = useGroups()



  return (
    <div className={`modal-groups ${modalGroup ? 'modal-groups--active' : ''}`}>
      <h2 className="title-h2 title-h2--modal">Seleccione un grupo:</h2>
      {groupsState.map((group) => (
        <ModalGroupItem key={group.id} groupId={group.id} groupTitle={group.title} />
      ))}
      <button onClick={handleModalGroup} className="input-group__button--red">Cancelar</button>
    </div>
  )
}