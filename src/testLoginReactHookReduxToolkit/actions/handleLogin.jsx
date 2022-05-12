import { loginUserFailure, loginUser } from '../reducer';

export default (data) => (dispatch) => {
    dispatch(loginUser());
    console.log('handleLogin', { data });
    setTimeout(() => dispatch(loginUserFailure()), 1000);
};
