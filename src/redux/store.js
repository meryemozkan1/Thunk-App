import { combineReducers, createStore, applyMiddleware } from "redux";
import resturantReducer from "./reducers/resturantReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  restaurants: resturantReducer,
  cart: basketReducer,
  products: productReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
/*
 * applyMiddleware her hangi biri ara yazılımı redux'a dahil etmeye yarar
 * Biz burda thunk dahil etmek için kullanıldı.
 */

export default createStore(rootReducer, applyMiddleware(thunk));
