import { Landing } from "./page/landing/Landing.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Banner } from "./component/Banner.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={"relative"}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
