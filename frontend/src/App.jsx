import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSiswa from "./pages/dashboardSiswa";
import LoginPage from "./pages/loginPage";
import Registerpage from "./pages/registerpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardSiswa />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </Router>
  );
}

export default App;
