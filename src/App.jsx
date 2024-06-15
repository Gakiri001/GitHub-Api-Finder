import "./assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import GithubUser from "./Pages/GithubUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GithubUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
