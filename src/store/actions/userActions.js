import * as user from "../../database/user.json";

export const fetchUser = () => {
  return {
    type: "FETCH_USER",
    payload: user
  };
};

export const sellCoin = coin => {
  return {
    type: "SELL_TC",
    payload: {
      coinAmount: coin
    }
  };
};

export const buyCoin = php => {
  return {
    type: "BUY_TC",
    payload: {
      phpAmount: php
    }
  };
};
