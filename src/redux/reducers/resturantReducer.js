import { useSelector } from "react-redux";
import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  restaurants: [],
};
useSelector;
const resturantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.REST_SUCCESS:
      const newState = {
        ...state,
        isLoading: false,
        error: false,
        restaurants: action.payload,
      };

      return newState;
  }
  return state;
};

export default resturantReducer;
