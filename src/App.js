import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
