import React, { useState } from "react";
import Radio from "../../../../Radio";

function ServiceOrder({ getServiceOrder }) {
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
    const {name, value} = e.target

    const newData = {
      ...data,
      [name]: value
    }
    setData(newData)
    getServiceOrder(newData)
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Layanan Yang Diminta</div>
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
              onChange={changeHandler}
              type="text"
              class="form-control"
              id="nama-perusahaan"
              name="informasiTambahan"
              value={data.informasiTambahan}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceOrder;
