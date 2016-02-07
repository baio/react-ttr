export function thunkMiddleware(_ref: any) {
  var dispatch = _ref.dispatch;
  var getState = _ref.getState;

  return function (next: any) {
    return function (action: any) {
      return typeof action === 'function' ? action(dispatch, getState) : next(action);
    };
  };
}
