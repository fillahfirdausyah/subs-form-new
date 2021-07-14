import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";
import { useAuth } from "../../../../Context/AuthContext";

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

function TypeofOrder({ data, uid, id }) {
  const [xkl, setXkl] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data/${uid}/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      radioData.forEach((x) => {
        if (Object.keys(theData.typeofOrder) == x.val) {
          x.checked = true;
        }
      });
      setXkl(radioData);
    });
    console.log("1");
  }, []);

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
              {xkl.map((x) => (
                <RadioTemplate
                  name={x.name}
                  key={x.id}
                  id={x.id}
                  label={x.label}
                  checked={x.checked && true}
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
