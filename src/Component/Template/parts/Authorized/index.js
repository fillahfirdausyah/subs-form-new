import React from "react";

// Compoenent
import { RadioTemplate } from "../../../Radio";

function Authorized({ data }) {
  const radioData = [
    {
      name: "kartuID",
      id: "ktp",
      val: "KTP",
      label: "KTP",
    },
    {
      name: "kartuID",
      id: "kim-s",
      val: "KIM-S",
      label: "KIM-S",
    },
    {
      name: "kartuID",
      id: "sim",
      val: "SIM",
      label: "SIM",
    },
    {
      name: "kartuID",
      id: "paspor",
      val: "PASPOR",
      label: "PASPOR",
    },
  ];

  return (
    <div className="authorized-person new-page">
      <div className="section1">
        <p>
          FORMULIR PENDAFTARAN BERLANGGANAN (Subscription Form)
          <br />
          SOFTWARE & INTERNET SERVICE PROVIDER
        </p>
      </div>
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">PENANGGUNG JAWAB PERUSAHAAN</span>{" "}
            <span className="font-italic">/ Authorized Person</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Nama /</p> <p className="font-italic"> Name</p>
            </td>
            <td>
              <input type="text" disabled value={data.nama} />
            </td>
          </tr>
          <tr>
            <td>
              <p>Tempat, Tanggal Lahir /</p>{" "}
              <p className="font-italic">Place, Date of Birth</p>
            </td>
            <td>
              <input
                type="text"
                disabled
                value={`${data.ttlTempat}, ${data.ttlTggl}`}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Jabatan /</p> <p className="font-italic">Position</p>
            </td>
            <td>
              <input type="text" disabled value={data.jabatan} />
            </td>
          </tr>
          <tr>
            <td>
              <p>Telepone /</p> <p className="font-italic">Phone</p>
            </td>
            <td>
              <input type="text" disabled value={data.telephone} />
              <br />
              <p>Kode Area / </p> <p className="font-italic">Area Code</p>
              {" | "}
              <p>Nomor / </p> <p className="font-italic">Number</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Kartu Identitas /</p> <p className="font-italic">ID Card</p>
            </td>
            <td className="id-card">
              {radioData.map((x) => (
                <RadioTemplate
                  label={x.label}
                  id={x.id}
                  value={x.val}
                  name={x.name}
                />
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <p>Masa Berlaku /</p> <p className="font-italic">Valid Until</p>
            </td>
            <td>
              <input type="text" disabled value={data.masaBerlaku} />
            </td>
          </tr>
          <tr>
            <td>
              <p>Alamat Email /</p> <p className="font-italic">Email Address</p>
            </td>
            <td>
              <input type="text" disabled value={data.email} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Authorized;
