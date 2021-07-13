import React, { useState, useEffect } from "react";
import { useAuth } from "../../../../../Context/AuthContext";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component

function Filledby({ getFilledBy }) {
  const { currentUser } = useAuth();
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");

  useEffect(() => {
    setNama(currentUser.displayName);
  }, []);

  const changeHandler = (e) => {
    const { value } = e.target;

    const newData = {
      nama,
      tanggal: value,
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
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filledby;
