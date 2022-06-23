import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchMonth(action) {
  try {
    const response = yield axios.get(`/api/month/${action.payload.monthID}`)
    console.log('this is response data in monthSaga', response.data)
    yield put({ type: 'GET_MONTH', payload: response.data })
  } catch {
    console.error('error getting into in monthSaga')
  }
}

function* monthSaga() {
  yield takeLatest('FETCH_MONTH', fetchMonth);
}

export default monthSaga;
