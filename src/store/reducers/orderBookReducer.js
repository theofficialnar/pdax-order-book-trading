const initState = {
  asks: [],
  bids: [],
  spread: 0,
  counter: 0
};

const orderBookReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ORDER_BOOK":
      console.log(action.type);
      return Object.assign({}, state, {
        asks: action.payload.asks,
        bids: action.payload.bids,
        spread: action.payload.spread,
        counter: action.payload.counter
      });

    case "PLACE_ASK_ORDER":
      console.log(action.type);
      // filter bids which are greater or equal to the ask price
      const matchedBids = state.bids.filter(
        i => i.price >= action.payload.price
      );

      // check if there are any matched bid prices
      // if matched -> get closest bid price
      // if not matched -> add to ask table
      if (matchedBids.length > 0) {
        const closestBid = matchedBids[matchedBids.length - 1];
        const updatedBids = state.bids.map(i => {
          if (i.id === closestBid.id) {
            return {
              id: i.id,
              type: i.type,
              price: i.price,
              volume: i.volume - action.payload.volume,
              total: i.total - action.payload.total
            };
          } else {
            return i;
          }
        });
        return Object.assign({}, state, {
          asks: state.asks,
          bids: updatedBids
        });
      } else {
        // used to check if price already exists in asks list
        const priceExists = state.asks.filter(
          i => i.price == action.payload.price
        );
        let asks = [];

        // if price exists -> add the volume and total to the current price
        // if price doesn't exist -> add as a new item
        if (priceExists.length > 0) {
          asks = state.asks.map(i => {
            if (i.price == action.payload.price) {
              return {
                id: i.id,
                type: "ask",
                price: i.price,
                volume: i.volume + action.payload.volume,
                total: i.total + action.payload.total
              };
            } else {
              return i;
            }
          });
        } else {
          asks = [
            ...state.asks,
            {
              id: `order-book-${state.counter + 1}`,
              type: "ask",
              price: action.payload.price,
              volume: action.payload.volume,
              total: action.payload.total
            }
          ];
        }

        // sort asks list and return
        const updatedAsks = asks.sort((a, b) => a.price < b.price);
        return Object.assign({}, state, {
          asks: updatedAsks,
          bids: state.bids
        });
      }

    case "PLACE_BID_ORDER":
      console.log(action.type);

      // filter asks which are lesser or equal to the bid price
      const matchedAsks = state.asks.filter(
        i => i.price <= action.payload.price
      );

      // check if there are any matched ask prices
      // if matched -> get closest ask price
      // if not matched -> add to bid table
      if (matchedAsks.length > 0) {
        const closestAsk = matchedAsks[0];
        const updatedAsks = state.asks.map(i => {
          if (i.id === closestAsk.id) {
            return {
              id: i.id,
              type: i.type,
              price: i.price,
              volume: i.volume - action.payload.volume,
              total: i.total - action.payload.total
            };
          } else {
            return i;
          }
        });
        return Object.assign({}, state, {
          asks: updatedAsks,
          bids: state.bids
        });
      } else {
        // used to check if price already exists in bids list
        const priceExists = state.bids.filter(
          i => i.price == action.payload.price
        );
        let bids = [];

        // if price exists -> add the volume and total to the current price
        // if price doesn't exist -> add as a new item
        if (priceExists.length > 0) {
          bids = state.bids.map(i => {
            if (i.price == action.payload.price) {
              return {
                id: i.id,
                type: "bid",
                price: i.price,
                volume: i.volume + action.payload.volume,
                total: i.total + action.payload.total
              };
            } else {
              return i;
            }
          });
        } else {
          bids = [
            ...state.bids,
            {
              id: `order-book-${state.counter + 1}`,
              type: "bid",
              price: action.payload.price,
              volume: action.payload.volume,
              total: action.payload.total
            }
          ];
        }

        // sort bids list and return
        const updatedBids = bids.sort((a, b) => a.price < b.price);
        return Object.assign({}, state, {
          asks: state.asks,
          bids: updatedBids
        });
      }

    default:
      return state;
  }
};

export default orderBookReducer;
