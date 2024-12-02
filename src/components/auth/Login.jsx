import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-lg font-medium py-2 px-6 mt-3 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-lg font-medium py-2 px-6 mt-3 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="outline-none text-white border-none hover:bg-emerald-700 bg-emerald-600 text-lg font-semibold py-2 px-8 mt-7 w-full rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
