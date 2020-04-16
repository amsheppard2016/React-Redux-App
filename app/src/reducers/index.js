import { FETCH_DATA, DATA_SUCCESS } from "../actions";

const initialState = {
    dogUrl: "",
    isLoading: false,
    error: "",
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case DATA_SUCCESS:
            return {
                ...state,
                dogUrl: action.payload.message,
                isLoading: false,
                error: "",
            };
        default:
            return state;
    }
};
