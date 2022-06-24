const monthReducer = (state = {}, action) => {
    console.log('in month reducer ', state)
    if (action.type === "GET_MONTH") {
      return action.payload
    }
    return state
  };


  export default monthReducer;