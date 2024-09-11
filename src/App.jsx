import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/ui/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
