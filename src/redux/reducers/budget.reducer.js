const budgetRouter = (state = [], action) => {
    if (action.type === "GET_BUDGET") {
      return action.payload
    }
    return state
  };


  export default budgetRouter;