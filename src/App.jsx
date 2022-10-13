import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "pages/SigninPage";
import FillterPage from "pages/FilterPage";
import ProfilePage from "pages/ProfilePage";
import { useState } from "react";
import SignupPage from "pages/SignupPage";
import { Button } from "@mui/material";
function App() {
  const [openSignin, setOpenSignin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
      <Button onClick={() => setOpenSignin(true)}>a
        </Button>
        
        <SigninPage
        openSignin = {openSignin}
        setOpenSignin = {setOpenSignin}
        ></SigninPage>
        <SignupPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
