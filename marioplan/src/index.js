import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// redux
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";

// create redux store and associate root reducer
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
