import React, { useState } from "react";

function InformasiPerusahaan({ getInfoPerushaan }) {
  const [data, setData] = useState({
    namaPerusahaan: "",
    groupPerusahaan: "",
    jenisUsaha: "",
    alamat: "",
    kota: "",
    kodePos: "",
    provinsi: "",
    alamatSitus: "",
    alamatEmail: "",
    npwp: "",
    telephone: "",
    fax: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const iko = {
      ...data,
      [name]: value,
    };
    setData(iko);
    getInfoPerushaan(iko);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Informasi Perusahaan Pelanggan</div>
        <div class="card-body">
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Nama Perusahaan
            </label>
            <input
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="nama-perusahaan"
              name="namaPerusahaan"
              value={data.namaPerusahaan}
            />
          </div>
          <div class="mb-3">
            <label for="group-perusahaan" class="form-label">
              Group Perusahaan
            </label>
            <input
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="group-perusahaan"
              value={data.groupPerusahaan}
              name="groupPerusahaan"
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Jenis Usaha
            </label>
            <input
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="jenis-usaha"
              value={data.jenisUsaha}
              name="jenisUsaha"
            />
          </div>
          <div class="mb-3">
            <label for="alamat" class="form-label">
              Alamat
            </label>
            <textarea
              onChange={changeHandler}
              class="form-control"
              id="alamat"
              rows="3"
              value={data.alamat}
              name="alamat"
            ></textarea>
          </div>
          <div class="mb-3">
            <div className="row">
              <div className="col-6">
                <label for="kota" class="form-label">
                  Kota
                </label>
                <input
                  onChange={changeHandler}
                  type="text"
                  class="form-control"
                  id="kota"
                  value={data.kota}
                  name="kota"
                />
              </div>
              <div className="col-6">
                <label for="kota" class="form-label">
                  Kode Pos
                </label>
                <input
                  onChange={changeHandler}
                  type="number"
                  class="form-control"
                  id="kota"
                  value={data.kodePos}
                  name="kodePos"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Provinsi
            </label>
            <input
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="jenis-usaha"
              value={data.provinsi}
              name="provinsi"
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Alamat Situs
            </label>
            <input
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="jenis-usaha"
              value={data.alamatSitus}
              name="alamatSitus"
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Alamat Email
            </label>
            <input
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="jenis-usaha"
              value={data.alamatEmail}
              name="alamatEmail"
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              NPWP
            </label>
            <input
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="jenis-usaha"
              value={data.npwp}
              name="npwp"
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Telephone
            </label>
            <input
              onChange={changeHandler}
              type="text"
              placeholder="Kode Area / Nomor"
              class="form-control"
              id="jenis-usaha"
              value={data.telephone}
              name="telephone"
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Fax
            </label>
            <input
              onChange={changeHandler}
              type="text"
              placeholder="Kode Area / Nomor"
              class="form-control"
              id="jenis-usaha"
              value={data.fax}
              name="fax"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InformasiPerusahaan;
