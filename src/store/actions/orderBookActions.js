import * as orders from "../../database/order-book.json";

export const fetchOrderBook = () => {
  const arr = Array.from(Object.keys(orders), i => orders[i]);
  const bids = arr.filter(i => i.type === "bid");
  const asks = arr.filter(i => i.type === "ask");
  return {
    type: "FETCH_ORDER_BOOK",
    payload: {
      bids,
      asks
    }
  };
};
