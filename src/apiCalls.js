import axios from 'axios';

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  console.log('started');
  try {
    // console.log(userCredentials);
    const res = await axios.post(
      'http://localhost:8800/api/auth/login',
      userCredentials
    );
    console.log('success');
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    console.log('fail');
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
