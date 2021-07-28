import React, { useState, useEffect } from "react";
import { database } from "../../../../../firebase";

function Filledby({ getFilledBy, uid, id }) {
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    let ref = database.ref(`data/${uid}/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      setNama(theData.filledBy.nama);
      setTanggal(theData.filledBy.tanggal);
    });
  }, []);

  const changeHandler = (e) => {
    const { value } = e.target;
    setTanggal(value);
    const newData = {
      nama: nama,
      tanggal: value,
    };

    setData(newData);
  };

  const fileHandler = (e) => {
    let date = Date.now();
    const imgName = `${date}-${e.target.files[0].name}`;
    const newData = {
      ...data,
      imgName,
      [e.target.name]: e.target.files[0],
    };

    getFilledBy(newData);
  };
  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Diisi Oleh Buana Lintas Media</div>
        <div className="card-body">
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Nama Marketing
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="nama-perusahaan"
              name="biayaSetUp"
              value={nama}
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Tanggal
            </label>
            <input
              required
              type="date"
              class="form-control"
              id="nama-perusahaan"
              name="biayaLayanan"
              value={tanggal}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Tanda Tangan PT. Buana Lintas Media
            </label>
            <input
              required
              type="file"
              class="form-control"
              name="ttd"
              onChange={fileHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filledby;
