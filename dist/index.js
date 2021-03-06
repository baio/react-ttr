System.register("greeting", [], function(exports_1) {
    "use strict";
    var GREET_TEXT, greeting;
    return {
        setters:[],
        execute: function() {
            GREET_TEXT = "\n==========================\n    TWITTER LIKE REACT\n    \nTwitter like app written for educational purpose using react, redux and typescript.    \n==========================    \n";
            exports_1("greeting", greeting = function () {
                return console.log(GREET_TEXT);
            });
        }
    }
});
System.register("app.types", [], function(exports_2) {
    "use strict";
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("reducers/app-reducer", [], function(exports_3) {
    "use strict";
    var reducer;
    return {
        setters:[],
        execute: function() {
            exports_3("reducer", reducer = function (state) {
                return state;
            });
        }
    }
});
System.register("utils/ep", [], function(exports_4) {
    "use strict";
    var load;
    return {
        setters:[],
        execute: function() {
            exports_4("load", load = function () {
                return Promise.resolve([
                    { id: "0", name: "zero" },
                    { id: "1", name: "one" }
                ]);
            });
        }
    }
});
System.register("actions", ["utils/ep"], function(exports_5) {
    "use strict";
    var ep_1;
    var IAction, createItem, removeItem, fetchStart, fetchComplete, fetchError, fetchItemsAsync;
    return {
        setters:[
            function (ep_1_1) {
                ep_1 = ep_1_1;
            }],
        execute: function() {
            IAction = (function () {
                function IAction() {
                }
                return IAction;
            }());
            exports_5("IAction", IAction);
            exports_5("createItem", createItem = function (name) {
                return ({ type: "create", payload: { id: null, name: name } });
            });
            exports_5("removeItem", removeItem = function (item) {
                return ({ type: "remove", payload: item });
            });
            fetchStart = function () {
                return ({ type: "fetchStart", payload: null });
            };
            fetchComplete = function (items) {
                return ({ type: "fetchComplete", payload: items });
            };
            fetchError = function (error) {
                return ({ type: "fetchError", payload: { innerError: error } });
            };
            exports_5("fetchItemsAsync", fetchItemsAsync = function () {
                return function (dispatch) {
                    dispatch(fetchStart());
                    ep_1.load().then(function (items) { return dispatch(fetchComplete(items)); }, function (error) { return dispatch(fetchError(error)); });
                };
            });
        }
    }
});
System.register("thunkMiddleware", [], function(exports_6) {
    "use strict";
    function thunkMiddleware(_ref) {
        var dispatch = _ref.dispatch;
        var getState = _ref.getState;
        return function (next) {
            return function (action) {
                return typeof action === 'function' ? action(dispatch, getState) : next(action);
            };
        };
    }
    exports_6("thunkMiddleware", thunkMiddleware);
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("components/list", [], function(exports_7) {
    "use strict";
    var List;
    return {
        setters:[],
        execute: function() {
            exports_7("List", List = function (_a) {
                var list = _a.list;
                return (React.createElement("div", null, list.items.length));
            });
        }
    }
});
System.register("components/create-new", [], function(exports_8) {
    "use strict";
    var CreateNew;
    return {
        setters:[],
        execute: function() {
            exports_8("CreateNew", CreateNew = function (_a) {
                var onClick = _a.onClick;
                return React.createElement("button", {onClick: function (e) { e.preventDefault(); onClick(); }}, "Create new");
            });
        }
    }
});
System.register("components/app", ["components/list", "components/create-new"], function(exports_9) {
    "use strict";
    var list_1, create_new_1;
    var App, render;
    return {
        setters:[
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (create_new_1_1) {
                create_new_1 = create_new_1_1;
            }],
        execute: function() {
            App = function (_a) {
                var state = _a.state;
                return (React.createElement("div", null, React.createElement(list_1.List, {list: state.list}), React.createElement(create_new_1.CreateNew, {onClick: function () { return console.log("clicked"); }})));
            };
            exports_9("render", render = function (state, store) {
                return ReactDOM.render(React.createElement(App, {state: state}), document.getElementById("root"));
            });
        }
    }
});
System.register("app", ["greeting", "reducers/app-reducer", "thunkMiddleware", "components/app"], function(exports_10) {
    "use strict";
    var greeting_1, app_reducer_1, thunkMiddleware_1, app_1;
    var createStore, applyMiddleware, store;
    return {
        setters:[
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            },
            function (app_reducer_1_1) {
                app_reducer_1 = app_reducer_1_1;
            },
            function (thunkMiddleware_1_1) {
                thunkMiddleware_1 = thunkMiddleware_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            greeting_1.greeting();
            createStore = Redux.createStore, applyMiddleware = Redux.applyMiddleware;
            store = createStore(app_reducer_1.reducer, applyMiddleware(thunkMiddleware_1.thunkMiddleware));
            store.subscribe(function () { return app_1.render(store.getState(), store); });
            app_1.render(store.getState(), store);
        }
    }
});
System.import('app');
System.register("list/actions", ["./ep"], function(exports_11) {
    "use strict";
    var ep_2;
    var IAction, createItem, removeItem, fetchStart, fetchComplete, fetchError, fetchItemsAsync;
    return {
        setters:[
            function (ep_2_1) {
                ep_2 = ep_2_1;
            }],
        execute: function() {
            IAction = (function () {
                function IAction() {
                }
                return IAction;
            }());
            exports_11("IAction", IAction);
            exports_11("createItem", createItem = function (name) {
                return ({ type: "create", data: { id: null, name: name } });
            });
            exports_11("removeItem", removeItem = function (id) {
                return ({ type: "remove", data: id });
            });
            fetchStart = function () {
                return ({ type: "fetchStart", data: null });
            };
            fetchComplete = function (items) {
                return ({ type: "fetchComplete", data: items });
            };
            fetchError = function (error) {
                return ({ type: "fetchError", data: error });
            };
            exports_11("fetchItemsAsync", fetchItemsAsync = function () {
                return function (dispatch) {
                    dispatch(fetchStart());
                    ep_2.load().then(function (items) { return dispatch(fetchComplete(items)); }, function (error) { return dispatch(fetchError(error)); });
                };
            });
        }
    }
});
System.register("list/ep", [], function(exports_12) {
    "use strict";
    var load;
    return {
        setters:[],
        execute: function() {
            exports_12("load", load = function () {
                return Promise.resolve([
                    { id: "0", name: "zero" },
                    { id: "1", name: "one" }
                ]);
            });
        }
    }
});
System.register("list/reducer", [], function(exports_13) {
    "use strict";
    var reducer;
    return {
        setters:[],
        execute: function() {
            exports_13("reducer", reducer = function (state, action) {
                if (state === void 0) { state = []; }
                console.log("list action", action);
                switch (action.type) {
                    case "fetchComplete":
                        return action.data;
                    case "create":
                        return [
                            action.data
                        ].concat(state);
                    case "remove":
                        var index = state.findIndex(function (p) { return p.id == action.data; });
                        return state.slice(0, index).concat(state.slice(index + 1));
                }
                return state;
            });
        }
    }
});
System.register("render", ["./list/list", "./list/create-item", "./list/actions"], function(exports_14) {
    "use strict";
    var list_2, create_item_1, actions_1;
    var render;
    return {
        setters:[
            function (list_2_1) {
                list_2 = list_2_1;
            },
            function (create_item_1_1) {
                create_item_1 = create_item_1_1;
            },
            function (actions_1_1) {
                actions_1 = actions_1_1;
            }],
        execute: function() {
            exports_14("render", render = function (list, store) {
                return ReactDOM.render(React.createElement("div", null, React.createElement(create_item_1.CreateItem, {onClick: function () { return store.dispatch(actions_1.createItem("new")); }}), React.createElement(list_2.List, {items: list})), document.getElementById("root"));
            });
        }
    }
});
System.register("list/create-item", [], function(exports_15) {
    "use strict";
    var CreateItem;
    return {
        setters:[],
        execute: function() {
            exports_15("CreateItem", CreateItem = function (_a) {
                var onClick = _a.onClick;
                return React.createElement("button", {onClick: function (e) { e.preventDefault(); onClick(); }}, "Create new");
            });
        }
    }
});
System.register("list/list", [], function(exports_16) {
    "use strict";
    var mapStateToProps, List;
    return {
        setters:[],
        execute: function() {
            mapStateToProps = function (state) {
                return {
                    todos: getVisibleTodos(state.todos, state.visibilityFilter)
                };
            };
            exports_16("List", List = function (props) {
                return React.createElement("h1", null, "count : ", props.items.length);
            });
        }
    }
});
//# sourceMappingURL=index.js.map