import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";

import Home from "./views/Home";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

const Index = () => <Home />;

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("index")
);
