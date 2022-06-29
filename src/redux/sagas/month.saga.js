import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';


function* fetchMonth(action) {
  try {
    const response = yield axios.get(`/api/month/${action.payload.monthID}`)
    console.log('this is response data in monthSaga', response.data)
    yield put({ type: 'GET_MONTH', payload: response.data })
  } catch {
    console.error('error getting into in monthSaga')
  }
}

function* updateIncome(action) {
  try {
    yield axios.put(`/api/month/${action.payload.id}`, action.payload)
    yield put({ type: 'FETCH_MONTH', payload:{monthID:action.payload.monthID} })
  }
  catch {
    console.error('error getting into in monthSaga put')
  }
}
function* addMonth(action) {
  try {
    const response = yield axios.post('/api/month', action.payload)
    yield put({ type: 'FETCH_MONTH', payload:{monthID:action.payload.monthID}})
    
  } catch {
    console.error('error adding in addMonth')
  }
}

function* monthSaga() {
  yield takeLatest('FETCH_MONTH', fetchMonth);
  yield takeLatest('UPDATE_INCOME', updateIncome);
  yield takeLatest('ADD_MONTH', addMonth);
}

export default monthSaga;
