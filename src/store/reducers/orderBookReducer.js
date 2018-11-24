const initState = {
  asks: [],
  bids: [],
  spread: 0
};

const orderBookReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ORDER_BOOK":
      console.log(action.type);
      return Object.assign({}, state, {
        asks: action.payload.asks,
        bids: action.payload.bids,
        spread: action.payload.spread
      });

    default:
      return state;
  }
};

export default orderBookReducer;
