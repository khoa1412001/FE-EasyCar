import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "pages/SigninPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SigninPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
