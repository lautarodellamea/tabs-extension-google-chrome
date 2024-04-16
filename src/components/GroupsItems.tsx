
import { useGroups } from "../hooks/useGroups"
import { Groups } from "../interfaces/groups.interfaces"
import { GroupItem } from "./GroupItem"

interface GroupsItemsProps {
  groups: Groups
}

export const GroupsItems = ({ groups }: GroupsItemsProps) => {

  const { groupsState } = useGroups()


  return (
    <>
      <h2 className="title-h2">Mis Grupos</h2>
      {
        (groupsState.length > 0) ? (<div className="groups-items">
          {groups.map((group) => (
            <GroupItem key={group.id} {...group} />
          ))}
        </div>) : (<p>No hay grupos creados.</p>)
      }
    </>
  )
}