function ModalCreateSiswa() {
  return (
    <div>
      <dialog id="modal_create_siswa" className="modal modal-middle">
        <div className="sm:container mx-3 sm:mx-auto modal-box p-0 shadow-none px-6">
          <div className="mockup-window md:w-full bg-base-300 overflow-y-scroll max-h-[600px] lg:max-h-[900px]">
            <div className="bg-base-200 px-5 py-5">
              <p>Foto</p>
              <input type="file" className="file-input w-full mt-5" />
              <p className="mt-5">Username</p>
              <label className="input flex items-center gap-2 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <input
                  type="text"
                  placeholder=""
                  className=" block flex-1 min-w-0 w-full text-sm p-2.5"
                />
              </label>
              <p className="mt-5">Email</p>
              <label className="input flex items-center gap-2 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-at"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                </svg>
                <input type="text" placeholder="" className="grow" />
              </label>
              <p className="mt-5">Password</p>
              <label className="input flex items-center gap-2 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-key"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                  <path d="M15 9h.01" />
                </svg>
                <input type="password" placeholder="" className="grow" />
              </label>
              <p className="mt-5">Role</p>
              <input type="text" value={"Siswa"} className="input flex w-full mt-5" />
              <p className="mt-5">Pengampu</p>
              <select className="select flex w-full mt-5">
                <option disabled selected>
                  --
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <button className="btn btn-success mt-5">Create</button>
            </div>
          </div>
        </div>

        <form method="dialog">
          <button className="btn btn-sm btn-circle w-[50px] h-[50px] text-lg">
            ✕
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default ModalCreateSiswa;
