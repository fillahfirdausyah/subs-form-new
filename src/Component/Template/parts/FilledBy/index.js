import React, { useEffect, useState } from "react";
import { RadioTemplate } from "../../../Radio";

const radioData = [
  {
    name: "document",
    id: "type1",
    label: "Fotokopi KTP / Paspor / Copy of ID / Passport",
    val: "Fotokpoi KTP Paspor",
  },
  {
    name: "document",
    id: "type2",
    label: "Fotokopi NPWP / Copy of Tax Registered Number",
    val: "Fotokopi NPWP",
  },
  {
    name: "document",
    id: "type2",
    label: "Surat Kuasa (apabila dikuasakan)",
    val: "Surat Kuasa",
  },
];

function FilledBy({ data }) {
  const [xkl, setXkl] = useState([]);

  return (
    <>
      <div className="filled-by">
        <table className="filled-table">
          <thead>
            <th colSpan="2">
              <span className="font-bold">Diisi oleh Buanalintas</span>{" "}
              <span className="font-italic">/ Filled by Buanalintas</span>
            </th>
          </thead>
          <tbody>
            <table style={{ width: "300px" }}>
              <tr>
                <td>Marketing</td>
                {data == undefined ? <td>: </td> : <td> : {data.nama}</td>}
              </tr>
              <tr>
                <td>Tanggal / Date</td>
                {data == undefined ? <td>: </td> : <td>: {data.tanggal}</td>}
              </tr>
            </table>
          </tbody>
          <div className="dokumen">
            <span className="font-bold">
              Kelengkapan dokumen pelanggan baru
            </span>{" "}
            <span className="font-italic">
              / Documents Requirements for New Customer
            </span>
            <div className="input-document">
              {radioData.map((x) => (
                <div className="row">
                  <div className="col">
                    <RadioTemplate
                      name={x.name}
                      key={x.id}
                      id={x.id}
                      label={x.label}
                      value={x.val}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </table>
      </div>
    </>
  );
}

export default FilledBy;
