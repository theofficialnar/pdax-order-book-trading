import * as orders from "../../database/order-book.json";

export const fetchOrders = () => {
  return {
    type: "FETCH_ORDERS",
    payload: orders
  };
};
