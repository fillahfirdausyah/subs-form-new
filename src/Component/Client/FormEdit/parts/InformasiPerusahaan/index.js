import React, { useState, useEffect } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import FormWrapper from "../FormWrapper";

function InformasiPerusahaan({ getInfoPerushaan, editData }) {
  const [open, setOpen] = useState(false);
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

  function getFakeData() {
    return new Promise((resolve) => setTimeout(() => resolve(editData), 1000));
  }

  useEffect(() => {
    const fetchData = async () => {
      let hasil = await getFakeData();

      setData({
        namaPerusahaan: hasil.infoPerusahaan.namaPerusahaan,
        groupPerusahaan: hasil.infoPerusahaan.groupPerusahaan,
        jenisUsaha: hasil.infoPerusahaan.jenisUsaha,
        alamat: hasil.infoPerusahaan.alamat,
        kota: hasil.infoPerusahaan.kota,
        kodePos: hasil.infoPerusahaan.kodePos,
        provinsi: hasil.infoPerusahaan.provinsi,
        alamatSitus: hasil.infoPerusahaan.alamatSitus,
        alamatEmail: hasil.infoPerusahaan.alamatEmail,
        npwp: hasil.infoPerusahaan.npwp,
        telephone: hasil.infoPerusahaan.telephone,
        fax: hasil.infoPerusahaan.fax,
      });
    };

    fetchData();
  }, []);

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
        <div class="card-header d-flex align-items-center justify-content-between">
          Informasi Perusahaan Pelanggan
          <button
            type="button"
            className="btn btn-sm btn-primary btn-collapsed"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </button>
        </div>
        <FormWrapper in={open}>
          <div class="card-body">
            <div class="mb-3">
              <label for="nama-perusahaan" class="form-label">
                Nama Perusahaan
              </label>
              <input
                required
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
                required
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
                required
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
                    required
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
                    required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
        </FormWrapper>
      </div>
    </>
  );
}

export default InformasiPerusahaan;
