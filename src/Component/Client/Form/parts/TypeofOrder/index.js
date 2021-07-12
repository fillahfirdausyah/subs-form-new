import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import Radio from "../../../../Radio";
import FormWrapper from "../FormWrapper";

function TypeofOrder({ getTypeofOrder }) {
  const [open, setOpen] = useState(false);
  const [other, setOther] = useState("");

  const xkl = [
    {
      name: "TypeofOrder",
      label: "New Installation",
      val: "New Installation",
      id: 1,
    },
    {
      name: "TypeofOrder",
      label: "Upgrade",
      val: "Upgrade",
      id: 2,
    },
    {
      name: "TypeofOrder",
      label: "Down Grade",
      val: "Down Grade",
      id: 3,
    },
    {
      name: "TypeofOrder",
      label: "Renewal",
      val: "Renewal",
      id: 4,
    },
  ];

  const otherHandler = (e) => {
    const iko = e.target.value;
    setOther(iko);
    getTypeofOrder(iko);
  };

  const radioHandler = (e) => {
    const { value, checked } = e.target;
    getTypeofOrder({ [value]: checked });
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Jenis Permintaan
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
          <div class="card-body">
            <table className="main-page">
              <tr>
                <td>Jenis Permintaan / Type of Order</td>
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
        </FormWrapper>
      </div>
    </>
  );
}

export default TypeofOrder;
