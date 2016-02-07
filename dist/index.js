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
System.register("list/types", [], function(exports_2) {
    "use strict";
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("list/ep", [], function(exports_3) {
    "use strict";
    var load;
    return {
        setters:[],
        execute: function() {
            exports_3("load", load = function () {
                return Promise.resolve([
                    { id: "0", name: "zero" },
                    { id: "1", name: "one" }
                ]);
            });
        }
    }
});
System.register("list/actions", ["list/ep"], function(exports_4) {
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
            exports_4("IAction", IAction);
            exports_4("createItem", createItem = function (name) {
                return ({ type: "create", data: { id: null, name: name } });
            });
            exports_4("removeItem", removeItem = function (id) {
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
            exports_4("fetchItemsAsync", fetchItemsAsync = function () {
                return function (dispatch) {
                    dispatch(fetchStart());
                    ep_1.load().then(function (items) { return dispatch(fetchComplete(items)); }, function (error) { return dispatch(fetchError(error)); });
                };
            });
        }
    }
});
System.register("list/reducer", [], function(exports_5) {
    "use strict";
    var reducer;
    return {
        setters:[],
        execute: function() {
            exports_5("reducer", reducer = function (state, action) {
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
System.register("list/list", [], function(exports_6) {
    "use strict";
    var List;
    return {
        setters:[],
        execute: function() {
            exports_6("List", List = function (props) {
                return React.createElement("h1", null, "count : ", props.items.length);
            });
        }
    }
});
System.register("list/create-item", [], function(exports_7) {
    "use strict";
    var CreateItem;
    return {
        setters:[],
        execute: function() {
            exports_7("CreateItem", CreateItem = function (_a) {
                var onClick = _a.onClick;
                return React.createElement("button", {onClick: function (e) { e.preventDefault(); onClick(); }}, "Create new");
            });
        }
    }
});
System.register("render", ["list/list", "list/create-item", "list/actions"], function(exports_8) {
    "use strict";
    var list_1, create_item_1, actions_1;
    var render;
    return {
        setters:[
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (create_item_1_1) {
                create_item_1 = create_item_1_1;
            },
            function (actions_1_1) {
                actions_1 = actions_1_1;
            }],
        execute: function() {
            exports_8("render", render = function (list, store) {
                return ReactDOM.render(React.createElement("div", null, React.createElement(create_item_1.CreateItem, {onClick: function () { return store.dispatch(actions_1.createItem("new")); }}), React.createElement(list_1.List, {items: list})), document.getElementById("root"));
            });
        }
    }
});
System.register("thunkMiddleware", [], function(exports_9) {
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
    exports_9("thunkMiddleware", thunkMiddleware);
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("app", ["greeting", "list/reducer", "list/actions", "render", "thunkMiddleware"], function(exports_10) {
    "use strict";
    var greeting_1, reducer_1, actions_2, render_1, thunkMiddleware_1;
    var createStore, applyMiddleware, store;
    return {
        setters:[
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            },
            function (reducer_1_1) {
                reducer_1 = reducer_1_1;
            },
            function (actions_2_1) {
                actions_2 = actions_2_1;
            },
            function (render_1_1) {
                render_1 = render_1_1;
            },
            function (thunkMiddleware_1_1) {
                thunkMiddleware_1 = thunkMiddleware_1_1;
            }],
        execute: function() {
            greeting_1.greeting();
            createStore = Redux.createStore, applyMiddleware = Redux.applyMiddleware;
            store = createStore(reducer_1.reducer, applyMiddleware(thunkMiddleware_1.thunkMiddleware));
            store.subscribe(function () { return render_1.render(store.getState(), store); });
            render_1.render(store.getState(), store);
            store.dispatch(actions_2.fetchItemsAsync());
        }
    }
});
System.import('app');
//# sourceMappingURL=index.js.map