import React from "react";

function InformasiPerusahaan({data}) {
  return (
    <div className="customer-information">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">INFORMASI PERUSAHAAN PELANGGAN</span>{" "}
            <span className="font-italic">/ Customer Information</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Nama Perusahaan /</p>{" "}
              <p className="font-italic">Company Name</p>
            </td>
            <td>
              { data.namaPerusahaan && <input type="text" value={data.namaPerusahaan} disabled/>}
            </td>
          </tr>
          <tr>
            <td>
              <p>Group Perusahaan /</p>{" "}
              <p className="font-italic">Company Group</p>
            </td>
            <td>
              <input type="text" value={data.groupPerusahaan} disabled/>
            </td>
          </tr>
          <tr>
            <td>
              <p>Jenis Usaha /</p>{" "}
              <p className="font-italic">Type of Business</p>
            </td>
            <td>
              <input type="text" value={data.jenisUsaha} disabled/>
            </td>
          </tr>
          <tr>
            <td>
              <p>Alamat /</p> <p className="font-italic">Address</p>
            </td>
            <td>
              <textarea name="" id="" cols="60" rows="5" value={data.alamat} disabled></textarea>
              <tr>
                <td>
                  <input type="text" className="input-city" value={data.kota} disabled/>
                  <br />
                  <p>Kota /</p> <p className="font-italic">City</p>
                </td>
                <td>
                  <input type="text" value={data.kodePos}/>
                  <br />
                  <p>Kode Pos /</p> <p className="font-italic">Zip Code</p>
                </td>
              </tr>
            </td>
          </tr>
          <tr>
            <td>
              <p>Provinsi /</p> <p className="font-italic">Province</p>
            </td>
            <td>
              <input type="text" value={data.provinsi} disabled/>
            </td>
          </tr>
          <tr>
            <td>
              <p>Alamat Situs /</p> <p className="font-italic">Situs Address</p>
            </td>
            <td>
              <input disabled type="text" value={data.alamatSitus}/>
            </td>
          </tr>
          <tr>
            <td>
              <p>Alamat Email /</p> <p className="font-italic">Email Address</p>
            </td>
            <td>
              <input disabled type="text" value={data.alamatEmail}/>
            </td>
          </tr>
          <tr>
            <td>
              <p>NPWP /</p> <p className="font-italic">Tax Registered Number</p>
            </td>
            <td>
              <input disabled type="text" value={data.npwp}/>
            </td>
          </tr>
          <tr>
            <td>
              <p>Telepone /</p> <p className="font-italic">Phone</p>
            </td>
            <td>
              <input disabled type="text" value={data.telephone}/>
              <br />
              <p>Kode Area / </p> <p className="font-italic">Area Code</p>
              {" | "}
              <p>Nomor / </p> <p className="font-italic">Number</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Fax /</p> <p className="font-italic">Phone</p>
            </td>
            <td>
              <input disabled type="text" value={data.fax}/>
              <br />
              <p>Kode Area / </p> <p className="font-italic">Area Code</p>
              {" | "}
              <p>Nomor / </p> <p className="font-italic">Number</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InformasiPerusahaan;
