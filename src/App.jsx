import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import VehicleSignupPage from "pages/VehicleSignupPage";
import ConfigRoute from "ConfigRoute";

function App() {
  const [openSignin, setOpenSignin] = useState(false)
  return (
    <BrowserRouter>
      <ConfigRoute/>
    </BrowserRouter>
  );
}

export default App;
