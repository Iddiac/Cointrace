const monthReducer = (state = {}, action) => {
    if (action.type === "GET_MONTH") {
      return action.payload
    }
    return state
  };


  export default monthReducer;