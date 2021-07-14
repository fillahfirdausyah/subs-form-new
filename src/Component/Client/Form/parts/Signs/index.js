import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import FormWrapper from "../FormWrapper";

function Signs({ getPtClient }) {
  const [open, setOpen] = useState(false);
  //   const [nama, setNama] = useState('')
  // const [file, setFile] = useState("");
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
      imgName: e.target.files[0].name,
      [e.target.name]: e.target.files[0],
    };

    setData(newData);
    getPtClient(newData);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Tanda Tangan
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
          <div className="card-body">
            <div class="mb-3">
              <label for="nama-perusahaan" class="form-label">
                PT.
              </label>
              <input
                required
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
                required
                type="file"
                class="form-control"
                name="ttd"
                onChange={fileHandler}
              />
            </div>
          </div>
        </FormWrapper>
      </div>
    </>
  );
}

export default Signs;
