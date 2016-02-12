import {IList} from "../app.types"

//import {connect} from "react-redux"

export const List = ({list} : {list : IList}) => ( 
    <div>{list.items.length}</div>
);
    
