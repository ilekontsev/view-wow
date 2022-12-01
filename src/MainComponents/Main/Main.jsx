import "./Main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../Pages/Home/Home";

function Test() {
  return (
    <div className="main-root">
      <div className="main-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Test;
