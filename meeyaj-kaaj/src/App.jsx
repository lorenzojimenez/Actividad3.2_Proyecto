import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VacantesPage from "./pages/VacantesPage";
import EmpresaPage from "./pages/EmpresaPage";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="contenido-principal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vacantes" element={<VacantesPage />} />
          <Route path="/empresa" element={<EmpresaPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;