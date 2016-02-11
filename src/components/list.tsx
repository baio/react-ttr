import {IList} from "../app.types"

export const List = (props : {list : IList, onClick : any}) =>
    <div>{props.list.items.length}</div>