import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchBudget(action) {
  try {
    const response = yield axios.get(`/api/budget/${action.payload.monthID}`)
    yield put({ type: 'GET_BUDGET', payload: response.data })
  } catch {
    console.error('error getting into in Budget')
  }
}

function* budgetSaga() {
  yield takeLatest('FETCH_BUDGET', fetchBudget);
}

export default budgetSaga;
