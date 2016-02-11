export interface IError {
    innerError : any
}

export interface IUser {
    name: string;
}

export interface IItem {
    id: string
    name: string
}

export interface IList {
    user: IUser;
    items: IItem[];
}

export interface ICreateNew {
    user: IUser; 
}

export interface IAppState {
    createNew: ICreateNew;
    list : IList;                
}

