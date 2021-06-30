import React, { useState } from "react";

function SubscriptionFee({ getSubscriptionFee }) {
  const [data, setData] = useState({
    biayaSetUp: "",
    biayaLayanan: "",
  });

  const changeHandler = (e) => {
    const {name, value} = e.target

    const newData = {
      ...data,
      [name]: value
    }
    setData(newData)
    getSubscriptionFee(newData)
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Biaya Berlangganan</div>
        <div className="card-body">
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Biaya Set Up
            </label>
            <input
              onChange={changeHandler}
              type="number"
              placeholder="Rp...."
              class="form-control"
              id="nama-perusahaan"
              name="biayaSetUp"
              value={data.biayaSetUp}
            />
          </div>
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Biaya Layanan
            </label>
            <input
              onChange={changeHandler}
              type="number"
              placeholder="Rp...."
              class="form-control"
              id="nama-perusahaan"
              name="biayaLayanan"
              value={data.biayaLayanan}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscriptionFee;
