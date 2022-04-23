import { v4 as uuidv4 } from "uuid";

export default function alertReducer(state, action) {
  switch (action.type) {
    case "append":
      action.payload.id = action.payload.id || uuidv4();
      action.payload.timeLimit = action.payload.timeLimit || 10;
      return [...state, action.payload];
    case "remove":
      return state.filter((alert) => alert.id !== action.payload);
    default:
      throw new Error();
  }
}
