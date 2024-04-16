
import { Tab } from "./Tab"
interface chromeTab {
  id: number;
  title?: string;
  url: string;
  favIconUrl?: string;
  groupId?: number;

}

interface TabsProps {
  tabs: chromeTab[]
}


export const Tabs = ({ tabs }: TabsProps) => {
  return (
    <>
      <h2 className="title-h2">Pestañas abiertas</h2>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <Tab key={tab.id} url={tab.url} title={tab.title!} id={tab.id}></Tab>
        ))}
      </div>
    </>
  )
}