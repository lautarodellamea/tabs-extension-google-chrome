
import { useGroups } from "../hooks/useGroups"



interface ModalGroupItemProps {
  groupId: number
  groupTitle: string
}





export const ModalGroupItem = ({ groupTitle, groupId }: ModalGroupItemProps) => {

  const { tabSelected, addTabToGroup, handleModalGroup } = useGroups()


  const addTab = (groupId: number, id: number, title: string, url: string) => {

    addTabToGroup(groupId, id, title, url)
    handleModalGroup()


  }



  return (
    <div className=" group-item-modal" onClick={() => addTab(groupId, tabSelected.id, tabSelected.title, tabSelected.url)}>

      <p className="group-item-modal__title" >{groupTitle}</p>

    </div>
  )
}