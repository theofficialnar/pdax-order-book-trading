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

    default:
      return state;
  }
};

export default userReducer;
