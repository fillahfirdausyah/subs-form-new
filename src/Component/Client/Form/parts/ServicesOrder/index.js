import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import Radio from "../../../../Radio";
import FormWrapper from "../FormWrapper";

function ServiceOrder({ getServiceOrder }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    spesifikasiLayanan: "",
    informasiTambahan: "",
  });

  const radioData = [
    {
      name: "serviceOrder",
      id: "internet",
      label: "INTERNET",
      val: "Internet",
    },
    {
      name: "serviceOrder",
      id: "voip",
      label: "VOIP",
      val: "Voip",
    },
    {
      name: "serviceOrder",
      id: "vps",
      label: "VPS",
      val: "Vps",
    },
    {
      name: "serviceOrder",
      id: "internet",
      label: "SOFTWARE AS SERVICE ",
      val: "SoftWareAsService",
    },
  ];

  const changeHandler = (e) => {
    const { name, value } = e.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getServiceOrder(newData);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Layanan Yang Diminta
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
              <label for="jenis-usaha" class="form-label">
                Jenis Layanan
              </label>
              <div className="row">
                {radioData.map((x) => (
                  <div className="col">
                    <Radio
                      name={x.name}
                      value={x.val}
                      label={x.label}
                      onChange={changeHandler}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div class="mb-3">
              <label for="nama-perusahaan" class="form-label">
                Spesifikasi Layanan
              </label>
              <input
                required
                onChange={changeHandler}
                type="text"
                class="form-control"
                id="nama-perusahaan"
                name="spesifikasiLayanan"
                value={data.spesifikasiLayanan}
              />
            </div>
            <div class="mb-3">
              <label for="nama-perusahaan" class="form-label">
                Informasi Tambahan
              </label>
              <input
                required
                onChange={changeHandler}
                type="text"
                class="form-control"
                id="nama-perusahaan"
                name="informasiTambahan"
                value={data.informasiTambahan}
              />
            </div>
          </div>
        </FormWrapper>
      </div>
    </>
  );
}

export default ServiceOrder;
