import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "../../App.css";
import Footer from "../Footer/Footer";
const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      <div className="mt-24 max-w-7xl mx-4 md:mx-auto">
        {navigation.state === "loading" ? (
          <div className="font-bold text-4xl flex items-center justify-center h-screen">Loading...........</div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
