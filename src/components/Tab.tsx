import { useGroups } from "../hooks/useGroups"

interface TabProps {
  id: number,
  url: string,
  title: string

}

export const Tab = ({ title, id, url }: TabProps) => {

  const { handleModalGroup, handleTabSelected } = useGroups()

  const handleClick = (id: number, title: string, url: string) => {
    console.log("clickeaste la tab con id: " + id)
    handleTabSelected(id, url, title)
    handleModalGroup()
  }



  return (
    <div className="tab-item" onClick={() => handleClick(id, title, url)}>
      <div className="tab-item__circle"></div>
      <p className="tab-item__title">{title}</p>
    </div>
  )
}

