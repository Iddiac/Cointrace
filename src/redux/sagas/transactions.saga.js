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

function* deleteTransactions(action) {
  try {
    console.log('this is action payload', action.payload)
    yield axios.delete(`/api/transactions/${action.payload.id}`, action.payload)
    yield put({ type:'FETCH_BUDGET', payload:{monthID: action.payload.monthID} })
    yield put({ type: 'FETCH_TRANSACTIONS', payload:{monthID:action.payload.monthID} })
  }
  catch {
    console.error('error getting into in transactions delete')
  }
}

function* transactionsSaga() {
  yield takeLatest('FETCH_TRANSACTIONS', fetchTransactions);
  yield takeLatest('DELETE_TRANSACTIONS', deleteTransactions);
}

export default transactionsSaga;
