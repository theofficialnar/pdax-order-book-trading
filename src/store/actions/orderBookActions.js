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
  const spread = sortedAsks[sortedAsks.length - 1].price - sortedBids[0].price;

  return {
    type: "FETCH_ORDER_BOOK",
    payload: {
      bids: sortedBids,
      asks: sortedAsks,
      spread,
      counter: arr.length + 1
    }
  };
};

export const placeAskOrder = (price, volume, total) => {
  return {
    type: "PLACE_ASK_ORDER",
    payload: {
      price,
      volume,
      total
    }
  };
};

export const placeBidOrder = (price, volume, total) => {
  return {
    type: "PLACE_BID_ORDER",
    payload: {
      price,
      volume,
      total
    }
  };
};
