import {IItem} from "./types"
import {IAction} from "./actions"

export const reducer = (state : IItem[] =  [] , action: IAction) : IItem[] => {
    
    console.log("list action", action);
    
    switch(action.type) {

        case "fetchComplete":
            return action.data;
        case "create":
            return [
                action.data, 
                ...state
                ];
        case "remove":
            let index = state.findIndex(p => p.id == action.data);
            return [
                ...state.slice(0, index), 
                ...state.slice(index + 1)
                ];                
    }    
    
    return state;
}
    
    

