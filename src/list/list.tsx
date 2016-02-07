import {IItem} from "./types"

export const List = (props : {items: IItem[]}) =>
    <h1>count : {props.items.length}</h1>