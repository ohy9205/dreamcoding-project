import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

/* redux=toolkit 사용 */
export const addProduct = createAction("ADD");

const reducer = createReducer([], {
  [addProduct]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
});

const store = configureStore({ reducer });

export default store;
