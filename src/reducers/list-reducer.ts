import {IAppState, IList, IItem} from "../app.types"
import {IAction} from "../actions"

export const reduceItems = (items: IItem[], action: IAction) : IItem[] => {

    switch(action.type) {

        case "fetchComplete":
            return <IItem[]>action.payload;
        case "create":
            return [ <IItem>action.payload, ...items ];
        case "remove":
            return items.filter(f => f.id != (<IItem>action.payload).id);                  
    }    
    
    return items;
}

export const reducer = (list : IList, action: IAction) : IList => {
    
    const items = reduceItems(list.items, action);
    
    if (list.items != items) {
        return  Object.assign({}, list, {list : {items}});
    }
            
    return list;
}
