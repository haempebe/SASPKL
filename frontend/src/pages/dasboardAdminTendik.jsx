import Sidebar from "../components/sidebar";
import TableAdmin from "../components/tableAdmin";
import ModalCreateTendik from "../components/modalCreateTendik";
import Footer from "./../components/footer";

function DashboardAdminTendik() {
  return (
    <>
      <Sidebar />
      <div className="sm:ml-64">
        <div className="p-3 mt-[67px]">
          <div className="grid md:grid-cols-2">
            <div className="mt-2 mb-2">
              <h5 className="text-2xl font-bold">Data Akun Tendik</h5>
            </div>
            <div className="text-end w-auto mb-4">
              <button
                className="btn btn-success"
                onClick={() =>
                  document.getElementById("modal_create_tendik").showModal()
                }
              >
                Tambah
              </button>
            </div>
          </div>
          <TableAdmin />
          <ModalCreateTendik />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DashboardAdminTendik;
