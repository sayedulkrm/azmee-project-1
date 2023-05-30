import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import ShopPage from "./pages/ShopPage.js";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
        </Routes>
    );
};

export default App;
