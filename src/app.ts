///<reference path="..\node_modules\retyped-es6-shim-tsd-ambient\es6-shim.d.ts" />
///<reference path="..\node_modules\retyped-react-tsd-ambient\react-global.d.ts" />
///<reference path="..\node_modules\retyped-redux-tsd-ambient\redux.d.ts" />
///<reference path="..\node_modules\retyped-react-redux-tsd-ambient\react-redux.d.ts" />


import { greeting } from "./greeting"

import {reducer} from "./reducers/app-reducer"
import {fetchItemsAsync} from "./actions"
import {thunkMiddleware} from "./thunkMiddleware"

import {render} from "./components/app"

greeting();

const { createStore, applyMiddleware } = Redux; 

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => render(store.getState(), store));

render(store.getState(), store);


