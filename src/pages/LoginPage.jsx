// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home");
    }
    // reset state
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
      <div className="w-full mx-auto flex justify-center mt-24 my-auto">
        <div className="w-4/12 border-2 boder-gray-400 rounded-lg shadow-lg p-6 max-w-md">
          <h2 className="text-2xl text-center">Login</h2>
          <form onSubmit={Auth} action="" className="mt-4">
            {isError && <p className="text-center">{message}</p>}
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border-2 border-gray-400 rounded-lg my-2 p-2"
              type="text"
              placeholder="Username"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="w-full border-2 border-gray-400 rounded-lg mt-2 p-2"
              type="text"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg mt-4 p-2 border-2 hover:border-black"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
