import { BrowserRouter } from "react-router-dom";
import VehicleSignupPage from "pages/VehicleSignupPage";
import ConfigRoute from "ConfigRoute";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ConfigRoute/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
