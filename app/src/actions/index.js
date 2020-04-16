import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA });

    axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
            console.log("action/index.js/axios/then/res", res.data);
            dispatch({ type: DATA_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("action/index.js/axios/catch/err", err);
        });
};
