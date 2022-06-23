import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchTransactions(action) {
  try {
    const response = yield axios.get(`/api/transactions/${action.payload.monthID}`)
    yield put({ type: 'GET_TRANSACTIONS', payload: response.data })
  } catch {
    console.error('error getting into in transactionsSaga')
  }
}

function* transactionsSaga() {
  yield takeLatest('FETCH_TRANSACTIONS', fetchTransactions);
}

export default transactionsSaga;
