import React from "react";
import Header from "../other/Header.jsx";
import CreateTask from "../other/CreateTask.jsx";
import AllTask from "../other/AllTask.jsx";

const AdminDashboard = (props) => {
  return (
    <div className="p-7 w-full h-screen">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
