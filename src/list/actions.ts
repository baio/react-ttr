import {load} from "./ep"
import {IItem} from "./types"

export class IAction {
    type: "create"|"remove"|"fetchStart"|"fetchComplete"|"fetchError"
    data: any
}

export type IActionAsync = (dispatch: Redux.Dispatch) => void;


export const createItem = (name: string) : IAction =>
    ({type : "create", data : {id: null, name }})    

export const removeItem = (id: string) : IAction =>
    ({type : "remove", data : id })    
    
const fetchStart = () : IAction => 
    ({type: "fetchStart", data : null})
    
const fetchComplete = (items: IItem[]) : IAction => 
    ({type: "fetchComplete", data : items})        
            
const fetchError = (error: any) : IAction => 
    ({type: "fetchError", data : error})        

export const fetchItemsAsync = () : IActionAsync => {
    return (dispatch: Redux.Dispatch) => {
        dispatch(fetchStart());
        load().then(
            items => dispatch(fetchComplete(items)),
            error => dispatch(fetchError(error)) 
        )   
    } 
}

