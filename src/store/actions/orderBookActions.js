import * as orders from "../../database/order-book.json";

export const fetchOrderBook = () => {
  // convert to array
  const arr = Array.from(Object.keys(orders), i => orders[i]);

  // compute total for each item price * volume
  const totalArr = arr.map(i => ({
    id: i.id,
    type: i.type,
    price: i.price,
    volume: i.volume,
    total: i.price * i.volume
  }));

  // filter bids from asks
  const bids = totalArr.filter(i => i.type === "bid");
  const asks = totalArr.filter(i => i.type === "ask");

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

export const placeAskOrder = () => {
  // limit sell
  // if type sell
  // check bid prices
  //   if sell price >= closest bid price
  //     proceed
  //     user balance php++ and tnc--
  //   else if no matches
  //     sell -> add to table
};
