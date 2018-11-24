const initState = {
  name: "",
  balances: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      console.log(action.type);
      return Object.assign({}, state, {
        name: action.payload.name,
        balances: action.payload.balances
      });

    case "SELL_TC":
      // console.log(state.balances);
      const updatedTestCoin = state.balances.map(i => {
        if (i.symbol === "TestCoin") {
          return {
            symbol: "TestCoin",
            balance: i.balance - action.payload.coinAmount
          };
        } else {
          return i;
        }
      });

      return Object.assign({}, state, {
        balances: updatedTestCoin
      });

    case "BUY_TC":
      const updatedPhp = state.balances.map(i => {
        if (i.symbol === "PHP") {
          return {
            symbol: "PHP",
            balance: i.balance - action.payload.phpAmount
          };
        } else {
          return i;
        }
      });
      return Object.assign({}, state, {
        balances: updatedPhp
      });

    default:
      return state;
  }
};

export default userReducer;
