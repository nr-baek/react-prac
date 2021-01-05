import { push } from 'connected-react-router';
import { createActions, handleActions } from 'redux-actions';
import { put, call, delay, takeEvery } from 'redux-saga/effects';
import AuthService from '../../services/AuthService';

// namespace
const prefix = 'my-books/auth';

// action creator
const { start, success, fail } = createActions('START', 'SUCCESS', 'FAIL', {
  prefix,
});

// initial state
const initialState = { token: null, loading: false, error: null };

// reducer
const auth = handleActions(
  {
    START: () => ({ token: null, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      token: null,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);
export default auth;

// saga
const SIGNIN_SAGA = prefix + '/SIGNIN_SAGA';
export const signinSagaStart = (email, password) => ({
  type: SIGNIN_SAGA,
  payload: { email, password },
});

export function* signinSaga(action) {
  try {
    // 호출 시작 => 로딩 시작
    yield put(start());
    const { email, password } = action.payload;
    const token = yield call(AuthService.login, email, password);
    // sleep
    yield delay(2000);
    // 호출 완료 (정상) => 로딩 끝
    // 토큰을 브라우저 어딘가에 저장한다.
    localStorage.setItem('token', token);
    yield put(success(token));
    // 페이지를 이동한다.
    // history.push('/');
    // -> dispatch(라우팅을 변경하는 액션 생성자 호출)
    yield put(push('/'));
  } catch (error) {
    // 호출 완료 (에러) => 로딩 끝
    console.log(error);
    yield put(fail(error));
  }
}
export function* authSaga() {
  yield takeEvery(SIGNIN_SAGA, signinSaga);
}
