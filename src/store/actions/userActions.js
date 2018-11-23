import * as user from "../../database/user.json";

export const fetchUser = () => {
  return {
    type: "FETCH_USER",
    payload: user
  };
};
