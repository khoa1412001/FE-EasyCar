import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
