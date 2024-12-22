import { useEffect } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  });

  return (
    <>
      <Login />;{/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
