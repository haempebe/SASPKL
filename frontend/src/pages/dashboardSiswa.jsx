import Navbar from "../components/navbar";
import Form from "../components/form";
import Table from "../components/table";
import Footer from "../components/footer";

function DashboardSiswa() {
  return (
    <div className="mx-5 md:mx-auto overflow-x-hidden">
      <Navbar />
      <Form />
      <Table />
      <Footer />
    </div>
  );
}

export default DashboardSiswa;
