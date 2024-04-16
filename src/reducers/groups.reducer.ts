import { Group, Groups } from '../interfaces/groups.interfaces';


type GroupsReducerAction = { type: 'SET_GROUPS'; payload: Groups } | { type: 'ADD_GROUP'; payload: Group } | { type: 'DELETE_ALL_GROUPS' } | { type: 'DELETE_GROUP'; payload: number } | { type: 'ADD_TAB_TO_GROUP'; payload: { groupId: number, url: string, title: string, id: number } } | { type: 'DELETE_TAB_TO_GROUP'; payload: { groupId: number, id: number } };


export const groupsReducer = (groupsState: Groups, action: GroupsReducerAction) => {

  switch (action.type) {

    case "SET_GROUPS":
      return action.payload;

    case "ADD_GROUP":
      return [...groupsState, action.payload]

    case "DELETE_ALL_GROUPS":
      return []

    case "DELETE_GROUP":
      return groupsState.filter(group => group.id !== action.payload)

    case "ADD_TAB_TO_GROUP":
      return groupsState.map(group => {
        if (group.id === action.payload.groupId) {
          return {
            ...group,
            tabs: [...group.tabs, { groupId: action.payload.groupId, id: action.payload.id, title: action.payload.title, url: action.payload.url }]
          };
        }

        return group;
      });

    case "DELETE_TAB_TO_GROUP":

      return groupsState.map(group => {
        if (group.id === action.payload.groupId) {
          return {
            ...group,
            tabs: group.tabs.filter(tab => tab.id !== action.payload.id)
          };
        }

        return group;
      });

    default:
      return groupsState;
  }
};