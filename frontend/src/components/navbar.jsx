import Theme from "./theme";
import useAuth from "../utils/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
const LOGOUT_URL = "/logout ";

function Navbar() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleFormLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        LOGOUT_URL,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      setAuth({});
      navigate("/login");
    } catch (error) {
      localStorage.removeItem("token");
      setAuth({});
      navigate("/login");
      console.error(error.response.data);
    }
  };
  return (
    <div className="navbar bg-base-300 container mx-auto mt-10 rounded-xl">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">SAS-PKL</a>
      </div>
      <div className="navbar-end">
        <div className="me-3">
          <Theme />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <form onSubmit={handleFormLogout} className="card-body">
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
