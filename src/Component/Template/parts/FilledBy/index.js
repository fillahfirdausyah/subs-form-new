import React, { useEffect, useState } from "react";
import { RadioTemplate } from "../../../Radio";
import { database } from "../../../../firebase";

const radioData = [
  {
    id: "type1",
    label: "Fotokopi KTP / Paspor / Copy of ID / Passport",
    name: "Fotokpoi KTP Paspor",
  },
  {
    id: "type2",
    label: "Fotokopi NPWP / Copy of Tax Registered Number",
    name: "Fotokopi NPWP",
  },
  {
    id: "type2",
    label: "Surat Kuasa (apabila dikuasakan)",
    name: "Surat Kuasa",
  },
];

function FilledBy({ data, uid, id }) {
  const [xkl, setXkl] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data/${uid}/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      if (theData.filledBy !== undefined) {
        radioData.forEach((x) => {
          let key = Object.keys(theData.documentReq);
          for (let i in key) {
            if (key[i] === x.name) {
              x.checked = true;
            }
          }
        });
      }
      setXkl(radioData);
    });
  }, []);

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
          <tr>
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
            <td></td>
          </tr>
          <tr>
            <div className="dokumen">
              <span className="font-bold">
                Kelengkapan dokumen pelanggan baru
              </span>{" "}
              <span className="font-italic">
                / Documents Requirements for New Customer
              </span>
              <div className="input-document">
                {xkl.map((x) => (
                  <div className="row">
                    <div className="col">
                      <RadioTemplate
                        name={x.name}
                        key={x.id}
                        id={x.id}
                        label={x.label}
                        value={x.val}
                        checked={x.checked && true}
                        disabled={x.disabled}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default FilledBy;
