const budgetRouter = (state = [], action) => {
    console.log('in BUDGET reducer ', state)
    if (action.type === "GET_BUDGET") {
      return action.payload
    }
    return state
  };


  export default budgetRouter;