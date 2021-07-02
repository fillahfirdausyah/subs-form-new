import React, { useState } from "react";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import Radio from "../../../../Radio";

function TypeofOrder({ getTypeofOrder }) {
  const [other, setOther] = useState("");

  const xkl = [
    {
      name: "TypeofOrder",
      label: "New Installation",
      val: "New Installation",
      id: "newInstallation",
    },
    {
      name: "TypeofOrder",
      label: "Upgrade",
      val: "Upgrade",
      id: "upgrade",
    },
    {
      name: "TypeofOrder",
      label: "Down Grade",
      val: "Down Grade",
      id: "downGrade",
    },
    {
      name: "TypeofOrder",
      label: "Renewal",
      val: "Renewal",
      id: "renewal",
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
        <div class="card-header">Jenis Permintaan</div>
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
      </div>
    </>
  );
}

export default TypeofOrder;
