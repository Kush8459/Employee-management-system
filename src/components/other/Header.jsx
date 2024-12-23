import React, { useState } from "react";

const Header = (props) => {
  const [userName, setUserName] = useState("");

  // if (!props.firstName) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(props.firstName);
  // }

  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">username 👋</span>
      </h1>
      <button
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
