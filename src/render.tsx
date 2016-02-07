import {IItem} from "./list/types"
import {List} from "./list/list"
import {CreateItem} from "./list/create-item"
import {createItem} from "./list/actions"

    
export const render = (list: IItem[], store: Redux.Store) =>
   ReactDOM.render(
      <div>
        <CreateItem onClick={() => store.dispatch(createItem("new"))} />
        <List items={list} />        
      </div>
      , document.getElementById("root"))