import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import Radio from "../../../../Radio";

function DocumentReq({ getDocumentReq }) {
  const [open, setOpen] = useState(false);

  const xkl = [
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

  const radioHandler = (e) => {
    const { value, checked } = e.target;
    getDocumentReq({ [value]: checked });
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Kelengkapan Dokumen Baru
          <button
            type="button"
            className="btn btn-sm btn-primary btn-collapsed"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </button>
        </div>
        <div class="card-body">
          <table style={{ border: "none" }} className="main-page">
            <tr>
              <td>Dokumen</td>
              <td>
                {xkl.map((x) => (
                  <Radio
                    name={x.name}
                    key={x.id}
                    id={x.id}
                    label={x.label}
                    value={x.val}
                    onChange={radioHandler}
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
