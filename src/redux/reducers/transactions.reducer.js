const transactionsRouter = (state = [], action) => {
    if (action.type === "GET_TRANSACTIONS") {
      return action.payload
    }
    return state
  };


  export default transactionsRouter;