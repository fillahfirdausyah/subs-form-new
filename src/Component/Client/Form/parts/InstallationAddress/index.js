import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import FormWrapper from "../FormWrapper";

function InstallationAddres({ getInstallationAddress }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;

    const newData = {
      [name]: value,
    };
    setData(newData);
    getInstallationAddress(newData);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Alamat Installasi
          <button
            type="button"
            className="btn btn-sm btn-primary btn-collapsed"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </button>
        </div>
        <div className="card-body">
          <div class="mb-3">
            <textarea
              onChange={changeHandler}
              class="form-control"
              id="alamat"
              rows="3"
              name="installationAddress"
              value={data.alamat}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstallationAddres;
