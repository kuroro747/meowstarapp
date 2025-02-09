import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

//group1
import HomePage from "./pages/group1/HomePage";
import LoginPage from "./pages/group1/LoginPage";
import SignUpPage from "./pages/group1/SignUpPage";

//group2
import HomePage2 from "./pages/group2/HomePage2";
import Page2_1 from "./pages/group2/Page2_1";
import Page2_2 from "./pages/group2/Page2_2";

//group3
import HomePage1_2 from "./pages/group3/HomePage1_2";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/homepage2" element={<HomePage2 />} />
        <Route path="/page2_1" element={<Page2_1 />} />
        <Route path="/page2_2" element={<Page2_2 />} />
        <Route path="/homepage1_2" element={<HomePage1_2 />} />
      </Routes>
    </div>
  );
};

export default App;
