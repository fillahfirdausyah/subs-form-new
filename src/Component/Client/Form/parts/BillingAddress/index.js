import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import FormWrapper from "../FormWrapper";

function BillingAddres({ getBillingAddress }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      [name]: value,
    };
    setData(newData);
    getBillingAddress(newData);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Alamat Penagihan
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
              <textarea
                class="form-control"
                id="alamat"
                rows="3"
                name="alamat"
                value={data.alamat}
                onChange={changeHandler}
              ></textarea>
            </div>
          </div>
        </FormWrapper>
      </div>
    </>
  );
}

export default BillingAddres;
