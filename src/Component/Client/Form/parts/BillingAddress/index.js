import React, { useState } from "react";

function BillingAddres({getBillingAddress}) {
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      [name]: value,
    };
    setData(newData)
    getBillingAddress(newData)
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Alamat Penagihan</div>
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
      </div>
    </>
  );
}

export default BillingAddres;
