import { push } from 'connected-react-router';
import AuthService from '../../services/AuthService';
import { sleep } from '../../utils';

// namespace
const namespace = 'my-books/auth';

// action types
const START = namespace + './START';
const SUCCESS = namespace + './SUCCESS';
const FAIL = namespace + './FAIL';

// initial state
const initialState = { token: null, loading: false, error: null };

// reducer
export default function books(state = initialState, action) {
  switch (action.type) {
    case START:
      return { token: null, loading: true, error: null };
    case SUCCESS:
      return { token: action.token, loading: false, error: null };
    case FAIL:
      return { token: null, loading: false, error: action.error };
    default:
      return state;
  }
}

// action creator
export const signinStart = () => ({ type: START });
export const signinSuccess = (token) => ({ type: SUCCESS, token });
export const signinFail = (error) => ({ type: FAIL, error });

// thunk
export const signinThunk = (email, password) => async (
  dispatch,
  getState,
  history,
) => {
  try {
    // 호출 시작 => 로딩 시작
    dispatch(signinStart());
    const token = await AuthService.login(email, password);
    // sleep
    await sleep(2000);
    // 호출 완료 (정상) => 로딩 끝
    // 토큰을 브라우저 어딘가에 저장한다.
    localStorage.setItem('token', token);
    dispatch(signinSuccess(token));
    // 페이지를 이동한다.
    // history.push('/');
    // -> dispatch(라우팅을 변경하는 액션 생성자 호출)
    dispatch(push('/'));
  } catch (error) {
    // 호출 완료 (에러) => 로딩 끝
    console.log(error);
    dispatch(signinFail(error));
  }
};
