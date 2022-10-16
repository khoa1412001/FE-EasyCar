import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import VehicleSignupPage from "pages/VehicleSignupPage";

function App() {
  const [openSignin, setOpenSignin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
      <VehicleSignupPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
