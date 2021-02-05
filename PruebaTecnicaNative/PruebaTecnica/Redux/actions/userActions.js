
export const logInUser = (values) => (dispatch) => {
  console.log("HOLAAAA")
  const userLog = values;

  dispatch({
    type: "LOG_IN",
    payload: { userLog },
  });
//  return window.location.replace('/')
}  

export const logOutUser = () => (dispatch) => {
  const userLog = {};
  dispatch({
    type: "LOG_OUT",
    payload: { userLog },
  });
}