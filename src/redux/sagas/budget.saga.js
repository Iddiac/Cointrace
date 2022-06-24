import axios from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';


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
    console.log('DANCING MONKEY WOOO')

    const month = yield select(state => state.month);
    yield put({ type:'FETCH_BUDGET', payload:{monthID: month.name} })
    yield put({ type: 'FETCH_TRANSACTIONS', payload:{monthID:month.name} })
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
