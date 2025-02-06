import "./App.css";

// new gpt 路由配置

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/group1/HomePage";
import LoginPage from "./pages/group1/LoginPage";
import SignUpPage from "./pages/group1/SignUpPage";

//page2
import HomePage2 from "./pages/group2/HomePage2";
import Page2_1 from "./pages/group2/Page2_1";
import Page2_2 from "./pages/group2/Page2_2";

//page1
import HomePage1 from "./pages/group3/HomePage1";

//page1_2
import HomePage1_2 from "./pages/group3/HomePage1_2";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/homepage2" element={<HomePage2 />} />
          <Route path="/page2_1" element={<Page2_1 />} />
          <Route path="/page2_2" element={<Page2_2 />} />

          <Route path="/homepage1" element={<HomePage1 />} />

          <Route path="/homepage1_2" element={<HomePage1_2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// 页面配置

// 路由配置和页面结构
