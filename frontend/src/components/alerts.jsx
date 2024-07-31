function Alerts({ message, clearMessage }) {
  if (message.success) {
    return (
      <div
        role="alert"
        className="alert alert-success shadow-lg shadow-success/50 "
      >
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
          className=""
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        <div>
          <h3 className="font-bold">Sukses</h3>
          <div className="text-xs">Anda berhasil melakukan Absensi</div>
        </div>
        <button
          className="btn btn-sm btn-success text-md"
          onClick={clearMessage}
        >
          ✕
        </button>
      </div>
    );
  } else if (message.update) {
    return (
      <div
        role="alert"
        className="alert alert-info shadow-lg shadow-info/50 my-5"
      >
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
          className=""
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        <div>
          <h3 className="font-bold">Updated</h3>
          <div className="text-xs">Update data berhasil</div>
        </div>
        <button className="btn btn-sm btn-info text-md">✕</button>
      </div>
    );
  } else if (message.delete) {
    return (
      <div
        role="alert"
        className="alert bg-red-600 text-white shadow-lg border-none shadow-red-500/50 "
      >
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
          className=""
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        <div>
          <h3 className="font-bold">Terhapus</h3>
          <div className="text-xs">Anda berhasil menghapus data</div>
        </div>
        <button
          className="btn btn-sm bg-red-600 border-0 hover:bg-red-700 text-md text-white"
          onClick={clearMessage}
        >
          ✕
        </button>
      </div>
    );
  }
  return null;
}

export default Alerts;
