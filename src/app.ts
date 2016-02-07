///<reference path="..\node_modules\retyped-es6-shim-tsd-ambient\es6-shim.d.ts" />
///<reference path="..\node_modules\retyped-react-tsd-ambient\react-global.d.ts" />
///<reference path="..\node_modules\retyped-redux-tsd-ambient\redux.d.ts" />


import { greeting } from "./greeting"

import { reducer } from "./list/reducer"
import { createItem } from "./list/actions"

import {fetchItemsAsync} from "./list/actions"
import {render} from "./render"
import {thunkMiddleware} from "./thunkMiddleware"


declare var document: Document;

greeting();

const { createStore, applyMiddleware } = Redux; 

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => render(store.getState(), store));

render(store.getState(), store);

store.dispatch(fetchItemsAsync());
