import { Routes, Route } from "react-router-dom";
import DashboardSiswa from "./pages/dashboardSiswa";
import DashboardAdmin from "./pages/dashboardAdmin";
import DashboardAdminTendik from "./pages/dasboardAdminTendik";
import DashboardAdminSiswa from "./pages/dashboadAdminSiswa";
import LoginPage from "./pages/loginPage";
import Registerpage from "./pages/registerpage";
import Layout from "./components/layout";
import RequireAuth from "./utils/requireAuth";
import DashboardGuru from "./pages/dashboardGuru";
import AuthRoute from "./utils/authRoute";

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardSiswa />} />
          <Route path="/dashboard-Guru" element={<DashboardGuru />} />
        </Route>
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route
          path="/dashboard-admin-tendik"
          element={<DashboardAdminTendik />}
        />
        <Route
          path="/dashboard-admin-siswa"
          element={<DashboardAdminSiswa />}
        />
      </Route>
      <Route element={<AuthRoute redirectTo="/" />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />} />
      </Route>
    </Routes>
  );
}

export default App;
