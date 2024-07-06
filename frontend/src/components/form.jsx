function Form() {
  return (
    <div className="container mx-auto mt-10">
      <div className="mockup-window bg-base-300 mt-10">
        <div className="bg-base-200 px-5 py-5">
          <p>Foto</p>
          <input type="file" className="file-input w-full mt-5" />
          <p className="mt-5">Deskripsi</p>
          <textarea className="textarea w-full mt-5"></textarea>
          <button className="btn btn-success mt-5">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
