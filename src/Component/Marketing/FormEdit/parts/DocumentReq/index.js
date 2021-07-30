import React, { useState, useEffect } from "react";

// Component
import { Checkbox } from "../../../../Radio";

function DocumentReq({ getDocumentReq }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const xkl = [
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

  useEffect(() => {
    getDocumentReq(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    const newData = {
      ...data,
      [name]: checked,
    };
    setData(newData);
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Kelengkapan Dokumen Baru
        </div>
        <div class="card-body">
          <table style={{ border: "none" }} className="main-page">
            <tr>
              <td>Dokumen</td>
              <td>
                {xkl.map((x) => (
                  <Checkbox
                    name={x.name}
                    id={x.id}
                    label={x.label}
                    checked={data[x.name]}
                    onChange={handleChange}
                  />
                ))}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default DocumentReq;
