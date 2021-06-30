import React, {useState} from "react";

function InstallationAddres({getInstallationAddress}) {

  const [data, setData] = useState({})

  const changeHandler = (e) => {

    const {name, value} = e.target

    const newData = {
      [name]: value
    }
    setData(newData)
    getInstallationAddress(newData)
  }

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Alamat Instalasi</div>
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
