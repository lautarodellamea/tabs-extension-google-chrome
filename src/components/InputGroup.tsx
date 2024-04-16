
import { useState } from "react"
import { useGroups } from "../hooks/useGroups"
import { Group } from "../interfaces/groups.interfaces"

export const InputGroup = () => {

  const { addGroup } = useGroups()

  const [inputValue, setInputValue] = useState("")

  const handleClick = () => {



    const group: Group = {
      id: Date.now(),
      title: inputValue.trim(),
      tabs: []
    }

    setInputValue("")

    addGroup(group)



  }





  return (
    <>
      <h2 className="title-h2">Crea un nuevo grupo</h2>
      <div className="input-group">
        <input onKeyDown={(e) => e.key === "Enter" && handleClick()} className="input-group__input" value={inputValue} placeholder="Nombre del grupo" type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button className="input-group__button" onClick={handleClick}>Crear</button>
      </div>
    </>
  )
}