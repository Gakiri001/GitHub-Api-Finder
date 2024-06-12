import "./assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
