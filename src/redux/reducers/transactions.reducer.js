const transactionsRouter = (state = [], action) => {
    console.log('in transaction reducer ', state)
    if (action.type === "GET_TRANSACTIONS") {
      return action.payload
    }
    return state
  };


  export default transactionsRouter;