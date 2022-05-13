import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import { LOGIN_SUCCESS, LOAD_SUCCESS, LOGOUT_SUCCESS } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  function generateToken(length) {
    var a =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(
        ""
      );
    var b = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    return b.join("");
  }

  const login = (username) => {
    const token = generateToken(300);
    dispatch({ type: LOGIN_SUCCESS, payload: { token, username } });
  };

  const loadUser = () => {
    dispatch({ type: LOAD_SUCCESS });
  };

  const logOut = () => {
    dispatch({ type: LOGOUT_SUCCESS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        user: state.user,
        login,
        generateToken,
        loadUser,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
