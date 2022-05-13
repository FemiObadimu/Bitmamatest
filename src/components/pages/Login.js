import React, { useState, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const authContext = useContext(AuthContext);
  const { login } = authContext;

  const [user, setUser] = useState({
    username: "",
  });

  const { username } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onCreate = (e) => {
    e.preventDefault();

    if (username === "") {
      return;
    } else {
      login(username);
      history("/home");
    }
  };
  return (
    <div>
      <div className="min-h-full mt-20 mx-2 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-600">
            Sign In <br /> Vast | Bitmama test
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-500"
                >
                  Your Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    onChange={onChange}
                    value={username}
                    name="username"
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={onCreate}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
