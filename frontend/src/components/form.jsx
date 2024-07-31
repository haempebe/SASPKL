import { useState } from "react";
import axios from "../api/axios";

const Form = ({ onAddAbsensi }) => {
  const [foto, setFoto] = useState(null);
  const [keterangan, setKeterangan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("foto", foto);
    formData.append("keterangan", keterangan);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post("/absensi", formData, config);
      console.log(response.data);
      onAddAbsensi(response.data);
      setFoto(null);
      setKeterangan("");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="mockup-window bg-base-300 mt-10">
        <form onSubmit={handleSubmit}>
          <div className="bg-base-200 px-5 py-5">
            <p>Foto</p>


            
            <input
              type="file"
              className="file-input w-full mt-5"
              accept="image/*"
              onChange={(e) => setFoto(e.target.files[0])}
            />
            <p className="mt-5">Deskripsi</p>
            <textarea
              className="textarea w-full mt-5"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-success mt-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
