import { REHYDRATE } from "redux-persist";

const initialState = {
  userID: localStorage.getItem("userID"),
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERID":
      return { userID: action.payload };

    case REHYDRATE:
      return {
        ...state,
        userID: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
