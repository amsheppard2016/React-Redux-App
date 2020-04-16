import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import DogImage from "./DogImage";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Random Dog Image</h1>
                <DogImage />
            </div>
        </Provider>
    );
}
