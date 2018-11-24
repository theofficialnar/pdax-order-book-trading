import * as orders from "../../database/order-book.json";

export const fetchOrderBook = () => {
  // convert to array
  const arr = Array.from(Object.keys(orders), i => orders[i]);

  // filter bids from asks
  const bids = arr.filter(i => i.type === "bid");
  const asks = arr.filter(i => i.type === "ask");

  // sort by price
  const sortedBids = bids.sort((a, b) => a.price < b.price);
  const sortedAsks = asks.sort((a, b) => a.price < b.price);

  // calculate spread and round to 4 decimal places
  const spread = (
    sortedAsks[sortedAsks.length - 1].price - sortedBids[0].price
  ).toFixed(4);

  return {
    type: "FETCH_ORDER_BOOK",
    payload: {
      bids: sortedBids,
      asks: sortedAsks,
      spread
    }
  };
};
