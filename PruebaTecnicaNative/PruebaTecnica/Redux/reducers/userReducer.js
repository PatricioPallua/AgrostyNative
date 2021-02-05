
const initialState = {};

export const userReducer = (state = initialState, action) => {  
  switch (action.type) {
    case "LOG_IN":
      return {
        userLog: action.payload,
      };
    case "LOG_OUT":
      return {
        userLog: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;