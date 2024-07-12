import Navbar from "../components/navbar";
import Tablguru from "../components/tableGuru";
import Footer from "../components/footer";

function DashboardGuru() {
  return (
    <div className="mx-5 md:mx-auto overflow-x-hidden">
      <Navbar />
      <Tablguru />
      <Footer />
    </div>
  );
}

export default DashboardGuru;
