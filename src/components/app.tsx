import {IAppState}  from "../app.types"
import {List} from "./list"
import {CreateNew} from "./create-new"

const App = ({state} : {state: IAppState}) => (
      <div>
        <List list={state.list}></List>
        <CreateNew onClick={() => console.log("clicked")}></CreateNew>
      </div>
)
    
export const render = (state: IAppState, store: Redux.Store) =>
   ReactDOM.render(
      <App state={state}></App>
   , document.getElementById("root"))    
    
    