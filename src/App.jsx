import { Landing } from "./page/landing/Landing.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Banner } from "./component/Banner.jsx";

function App() {
  return (
    <div className={"relative"}>
      <Navbar />
      <Banner />
      <Landing />
    </div>
  );
}

export default App;
