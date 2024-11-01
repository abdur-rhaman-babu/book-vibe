import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import '../../App.css'
const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
