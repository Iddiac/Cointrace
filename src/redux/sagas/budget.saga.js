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

function* updateTotal(action) {
  try {
    yield axios.put(`/api/budget/${action.payload.id}`, action.payload)
    yield put({ type:'FETCH_BUDGET', payload:{monthID:action.payload.monthID} })
  }
  catch {
    console.error('error getting into in budgetsaga put')
  }
}

function* budgetSaga() {
  yield takeLatest('FETCH_BUDGET', fetchBudget);
  yield takeLatest('UPDATE_BUDGET', updateTotal);
}

export default budgetSaga;
