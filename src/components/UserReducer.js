import { data } from "./data";

export const initialValue = {
  data: data,
};

export const reducer = (state, action) => {
  if (action.type === "clear") {
    return { ...state, data: [] };
  }

  if (action.type === "reset") {
    return { ...state, data: initialValue.data };
  }

  if (action.type === "remove") {
    const newList = state.data.filter((dt) => {
      if (dt.id !== action.payload) {
        return dt;
      }
    });
    return { ...state, data: newList };
  }
};
