import Sidebar from "../components/sidebar";
import Stat from "../components/stat";
import TableAdmin from "../components/tableAdmin";
import Footer from "./../components/footer";

function DashboardAdmin() {
  return (
    <>
      <Sidebar />
      <div className="sm:ml-64">
        <div className="p-3 mt-[67px]">
          <Stat />
          <TableAdmin />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
