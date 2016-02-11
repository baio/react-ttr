import {IItem} from "./types"

export const load = () : Promise<IItem[]> =>
    Promise.resolve([
        {id : "0", name: "zero"},
        {id : "1", name: "one"}
    ])