import React from "react";

// Component
import { RadioTemplate } from "../../../Radio";

const radioData = [
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

function TypeofOrder(props) {
  return (
    <div className="type-of-order">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">JENIS PERMINTAAN</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Jenis permintaan / Type of Order</p>
            </td>
            <td>
              {radioData.map((x) => (
                <RadioTemplate
                  name={x.name}
                  key={x.id}
                  id={x.id}
                  label={x.label}
                  value={x.val}
                />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TypeofOrder;
