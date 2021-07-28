import React, { useState, useEffect } from "react";
import { database } from "../../../../../firebase";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component

function SubscriptionFee({ getSubscriptionFee, uid, id }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    biayaSetUp: "",
    biayaLayanan: "",
  });

  useEffect(() => {
    let ref = database.ref(`data/${uid}/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      setData(theData.subscriptionFee);
      getSubscriptionFee(theData.subscriptionFee);
    });
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getSubscriptionFee(newData);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Biaya Berlangganan
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
            <label for="nama-perusahaan" class="form-label">
              Biaya Set Up
            </label>
            <input
              required
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
              required
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
