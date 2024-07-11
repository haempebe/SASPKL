import Theme from "./theme";

function Navbar() {
  return (
    <div
      className="navbar bg-neutral container mx-auto mt-10 rounded-xl"
      data-theme="dark"
    >
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
            className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
