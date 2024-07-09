import { useState, useEffect } from "react";
import Theme from "./theme";

function Register() {
  let see = "password";

  const handlePasswordVisibility = (e) => {
    see = e.target.checked ? "text" : "password";
    document.getElementById("passwordInput").type = see;
  };

  let see1 = "password";

  const handlePasswordVisibility1 = (e) => {
    see1 = e.target.checked ? "text" : "password";
    document.getElementById("passwordInput1").type = see1;
  };

  const [logo, setLogo] = useState(
    JSON.parse(localStorage.getItem("islight"))
      ? "/public/assets/img/logoUtama.png"
      : "/public/assets/img/logoPutih.png"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setLogo(
        JSON.parse(localStorage.getItem("islight"))
          ? "/public/assets/img/logoUtama.png"
          : "/public/assets/img/logoPutih.png"
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="sm:hero bg-base-200 min-h-screen min-w-screen">
        <div className="hero-content">
          <div>
            <img className=" max-w-sm mx-auto mb-5 max-h-[150px]" src={logo} />
            <div className="card bg-base-100 max-w-sm lg:w-[400px] shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-bold">Daftar </h1>
                  <Theme />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nama</span>
                  </label>
                  <input
                    type="Nama"
                    placeholder=""
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input type={see} className="grow" id="passwordInput" />
                    {/* logo swap */}
                    <label className="swap swap-rotate">
                      <input
                        type="checkbox"
                        onChange={handlePasswordVisibility}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="swap-off h-5 w-5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="swap-on h-5 w-5"
                        id=""
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                        <path d="M3 3l18 18" />
                      </svg>
                    </label>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input type={see1} className="grow" id="passwordInput1" />
                    {/* logo swap */}
                    <label className="swap swap-rotate">
                      <input
                        type="checkbox"
                        onChange={handlePasswordVisibility1}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="swap-off h-5 w-5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="swap-on h-5 w-5"
                        id=""
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                        <path d="M3 3l18 18" />
                      </svg>
                    </label>
                  </label>
                  <label className="label">
                    <span className="label-text-alt ">Sudah punya akun?, <a href="/login" className="link link-hover text-blue-700">Login</a> </span>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn btn-primary">Daftar</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
