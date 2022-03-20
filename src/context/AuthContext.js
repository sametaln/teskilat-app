import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '620944d450192832c695a43c',
    username: 'Sema',
    email: 'sema@gmail.com',
    password: '$2b$05$4P/c9LbZm7WjT8uNBYOx1.Q1e3WzWgn0/ybqT3sfCffMOOco3qsn6',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    followings: ['6209472fb79b8a0cf68df58b'],
    isAdmin: false,
    createdAt: { $date: '2022-02-13T17:50:12.509Z' },
    updatedAt: { $date: '2022-02-13T19:04:40.839Z' },
    __v: 0,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
