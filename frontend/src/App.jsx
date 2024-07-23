import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSiswa from "./pages/dashboardSiswa";
import DashboardAdmin from "./pages/dashboardAdmin";
import DashboardAdminTendik from "./pages/dasboardAdminTendik";
import DashboardAdminSiswa from "./pages/dashboadAdminSiswa";
import LoginPage from "./pages/loginPage";
import Registerpage from "./pages/registerpage";
import DashboardGuru from "./pages/dashboardGuru";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardSiswa />} />
        <Route path="/dashboard-Guru" element={<DashboardGuru />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/dashboard-admin-tendik" element={<DashboardAdminTendik />} />
        <Route path="/dashboard-admin-siswa" element={<DashboardAdminSiswa />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </Router>
  );
}

export default App;
