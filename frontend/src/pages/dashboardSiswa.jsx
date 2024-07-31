import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import Table from "../components/table";
import axios from "../api/axios";
import Alerts from "../components/alerts";

function DashboardSiswa() {
  const [absensi, setAbsensi] = useState([]);
  const [message, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    console.log("id : -", id);
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete("/absensi/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.status == 200) {
        throw new Error("Failed to delete item");
      }
      console.log(response.data);
      setMessage({ delete: true });
      setAbsensi(absensi.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
      setMessage({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAbsensi();
  }, []);
  const navigate = useNavigate();
  const getAbsensi = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get("/absensi", config);
      setAbsensi(response.data);
    } catch (err) {
      if (err.message == "Request failed with status code 401") {
        localStorage.removeItem("token");
        console.error("Unauthorized. Token removed.");
        navigate("/login");
      } else {
        setMessage({ error: err.message });
        console.error(err);
      }
    }
  };

  const handleAddAbsensi = () => {
    getAbsensi();
    setMessage({ success: true });
  };
  const clearMessage = () => {
    setMessage({});
  };

  return (
    <>
      <Form onAddAbsensi={handleAddAbsensi} />
      <Table absensi={absensi} handleDelete={handleDelete} />
      <div className="absolute top-6 left-6 lg:bottom-12 lg:right-12 lg:top-auto lg:left-auto">
        <div className="min-w-[200px]">
          <Alerts message={message} clearMessage={clearMessage} />
        </div>
      </div>
    </>
  );
}

export default DashboardSiswa;
