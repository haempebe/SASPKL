import Modal from "./modal";

function Table() {
  return (
    <div className="container mx-auto mt-10">
      <div className="mockup-window md:w-full bg-base-300 mt-10">
        <div className="bg-base-200 px-5 py-5">
          <div className="w-full">
            <table className="table">
              {/* head */}
              <thead></thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1.</th>
                  <td className="w-full">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td className="flex">
                    <button
                      className="btn btn-success me-2"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="swap-off h-6 w-6"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                      </svg>
                    </button>
                  </td>

                  {/* <td className="flex">
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      open modal
                    </button>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Table;
