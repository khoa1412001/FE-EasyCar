import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "pages/SigninPage";
import FillterPage from "pages/FilterPage";
import ProfilePage from "pages/ProfilePage";
function App() {
  const [openSignin, setOpenSignin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <ProfilePage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
