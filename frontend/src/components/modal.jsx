const Modal = () => {
  return (
    <div>
      <dialog id="my_modal_4" className="modal modal-middle">
        <div className="sm:container mx-3 sm:mx-auto modal-box p-0 shadow-none">
          <div className="mockup-window md:w-full bg-base-300 overflow-y-scroll max-h-[600px] lg:max-h-[900px]">
            <div className="bg-base-200 px-5 py-5">
              <div className="w-full">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  <div>
                    <img
                      className="rounded-xl shadow-xl bg-white w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover object-top md:object-center"
                      src="https://i.pinimg.com/736x/6f/61/f9/6f61f9c13b8efd73b4b29df98b4adb62.jpg"
                      alt="Shoes"
                    />
                  </div>
                  <div className="md:col-span-2 ">
                    <div className="card bg-base-100 shadow-xl mb-5">
                      <div className="card-body">
                        <h2 className="card-title">Kegiatan</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                      </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl min-h-[48vh]">
                      <div className="card-body">
                        <h2 className="card-title">Keterangan!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
};

export default Modal;
