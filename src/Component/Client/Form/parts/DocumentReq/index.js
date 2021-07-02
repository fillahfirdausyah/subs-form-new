import React from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import Radio from "../../../Radio";

function DocumentReq() {
  const [open, setOpen] = useState(false);

  const xkl = [
    {
      name: "document",
      id: "type1",
      label: "Fotokopi KTP / Paspor / Copy of ID / Passport",
    },
    {
      name: "document",
      id: "type2",
      label: "Fotokopi NPWP / Copy of Tax Registered Number",
    },
    {
      name: "document",
      id: "type2",
      label: "Surat Kuasa (apabila dikuasakan)",
    },
  ];

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
          <table className="main-page">
            <tr>
              <td>Dokumen</td>
              <td>
                {xkl.map((x) => (
                  <Radio name={x.name} key={x.id} id={x.id} label={x.label} />
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
