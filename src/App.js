import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Collab from "./pages/Collab";
import Footer from "./pages/Footer";
import Services from "./pages/Services";
import Loading from "./pages/Header";
import Partners from "./pages/Partners";
import Products from "./pages/Products";
import Subscribe from "./pages/Subscribe";
import Team from "./pages/Team";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Loading />
        <Services />
        <AboutUs />
        <Products />
        <Collab />
        <Team />
        <Partners />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
