import {load} from "./utils/ep"
import {IItem, IError} from "./app.types"

export class IAction {
    type: "create"|"remove"|"fetchStart"|"fetchComplete"|"fetchError"
    payload: IItem|IItem[]|IError
}

export type IActionAsync = (dispatch: Redux.Dispatch) => void;

export const createItem = (name: string) : IAction =>
    ({type : "create", payload : {id: null, name }})    

export const removeItem = (item: IItem) : IAction =>
    ({type : "remove", payload : item })    
    
const fetchStart = () : IAction => 
    ({type: "fetchStart", payload : null})
    
const fetchComplete = (items: IItem[]) : IAction => 
    ({type: "fetchComplete", payload : items})        
            
const fetchError = (error: any) : IAction => 
    ({type: "fetchError", payload : {innerError : error}})        

export const fetchItemsAsync = () : IActionAsync => {
    return (dispatch: Redux.Dispatch) => {
        dispatch(fetchStart());
        load().then(
            items => dispatch(fetchComplete(items)),
            error => dispatch(fetchError(error)) 
        )   
    } 
}

