const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      // aciton.payload を活用
      return state + action.payload.num;

    case "MINUS":
      return state - action.payload.num;

    default:
      return state;
  }
};

export default reducer;
