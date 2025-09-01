import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<LoginPage />} />
<Route path="/signup" element={<SignUpPage />} />
<Route path="/forgot-password" element={<ForgotPasswordPage />} />
<Route path="/home" element={<h1 style={{textAlign:"center"}}>Welcome Home!</h1>} />
</Routes>
</Router>
);
}

export default App;
