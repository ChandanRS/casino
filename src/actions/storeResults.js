import {
   ADD_ROW
  } from "./types";

export const storeResults = (data) => dispatch=> {
    dispatch({
      type: ADD_ROW,
      payload: data
    });
  }