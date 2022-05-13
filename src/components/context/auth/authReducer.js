import { LOGIN_SUCCESS, LOAD_SUCCESS, LOGOUT_SUCCESS } from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: localStorage.getItem("token"),
        user: localStorage.getItem("username"),
        error: null,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.username);

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.username,
        error: null,
      };

    case LOGOUT_SUCCESS:
      localStorage.clear("token");
      localStorage.clear("username");
      return {
        isAuthenticated: null,
        token: null,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
