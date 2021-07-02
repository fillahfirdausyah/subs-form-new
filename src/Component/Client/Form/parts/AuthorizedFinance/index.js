import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import FormWrapper from "../FormWrapper";

function AuthorizedFinance({ getAuthorizedFinance }) {
  const [open, setOpen] = useState(false);
  const [data, setaData] = useState({
    nama: "",
    bagian: "",
    jabatan: "",
    telephone: "",
    fax: "",
    email: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setaData(newData);
    console.log(newData);

    getAuthorizedFinance(newData);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Penanggung Jawab Keuangan
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
                Nama
              </label>
              <input
                onChange={changeHandler}
                type="text"
                class="form-control"
                id="nama-perusahaan"
                name="nama"
                value={data.nama}
              />
            </div>
            <div class="mb-3">
              <label for="nama-perusahaan" class="form-label">
                Bagian
              </label>
              <input
                onChange={changeHandler}
                type="text"
                class="form-control"
                id="nama-perusahaan"
                name="bagian"
                value={data.bagian}
              />
            </div>
            <div class="mb-3">
              <label for="jenis-usaha" class="form-label">
                Jabatan
              </label>
              <input
                onChange={changeHandler}
                type="text"
                class="form-control"
                id="jenis-usaha"
                name="jabatan"
                value={data.jabatan}
              />
            </div>
            <div class="mb-3">
              <label for="jenis-usaha" class="form-label">
                Telephone
              </label>
              <input
                onChange={changeHandler}
                type="number"
                placeholder="Kode Area / Nomor"
                class="form-control"
                id="jenis-usaha"
                name="telephone"
                value={data.telephone}
              />
            </div>
            <div class="mb-3">
              <label for="jenis-usaha" class="form-label">
                Fax
              </label>
              <input
                onChange={changeHandler}
                type="number"
                placeholder="Kode Area / Nomor"
                class="form-control"
                id="jenis-usaha"
                name="fax"
                value={data.fax}
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
                name="email"
                value={data.email}
              />
            </div>
          </div>
        </FormWrapper>
      </div>
    </>
  );
}

export default AuthorizedFinance;
