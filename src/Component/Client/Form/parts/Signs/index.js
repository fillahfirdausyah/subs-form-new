import React, { useState } from "react";

function Signs({ getPtClient }) {
  //   const [nama, setNama] = useState('')
  //   const [file, setFile] = useState('')
  const [data, setData] = useState({
    namaPT: "",
    ttd: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    let newData = {
      ...data,
      [name]: value,
    };

    setData(newData);
    console.log(newData);
  };

  const fileHandler = (e) => {
    const newData = {
        ...data,
        [e.target.name]: e.target.files[0]
    }

    setData(newData)
    getPtClient(newData)
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Tanda Tangan</div>
        <div className="card-body">
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              PT.
            </label>
            <input
              placeholder="PT. ...."
              type="text"
              class="form-control"
              id="nama-perusahaan"
              name="namaPT"
              value={data.namaPT}
              onChange={changeHandler}
            />
          </div>
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Tanda Tangan PT. {data.namaPT}
            </label>
            <input
              type="file"
              class="form-control"
              id="nama-perusahaan"
              name="ttd"
              onChange={fileHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signs;
