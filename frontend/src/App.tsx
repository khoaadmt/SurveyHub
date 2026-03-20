import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import "./App.css";
import RegisterPage from "./pages/Auth/RegisterPage/RegisterPage";

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                {/* <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route> */}

                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
