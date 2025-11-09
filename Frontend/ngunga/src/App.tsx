import { Routes, Route, useNavigate } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { TermsPage } from "./components/TermsPage";
import { PrivacyPage } from "./components/PrivacyPage";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      <Routes>
        {/* Accueil */}
        <Route
          path="/"
          element={
            <LandingPage
              onGetStarted={() => navigate("/register")}
              onLogin={() => navigate("/login")}
            />
          }
        />

        {/* Connexion */}
        <Route
          path="/login"
          element={
            <LoginPage
              onLogin={() => navigate("/")}
              onBack={() => navigate("/")}
            />
          }
        />

        {/* Inscription */}
        <Route
          path="/register"
          element={
            <RegisterPage
              onRegister={() => navigate("/login")}
              onBack={() => navigate("/")}
              onLoginClick={() => navigate("/login")}
            />
          }
        />

        {/* Pages légales */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}
