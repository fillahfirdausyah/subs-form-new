import React from "react";

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
              <input type="checkbox" id="NewInstalation" />
              <label htmlFor="New Instalation">New Instalation</label>
              <input type="checkbox" />
              <label htmlFor="Upgrade">Upgrade</label>
              <input type="checkbox" />
              <label htmlFor="Upgrade">Down grade</label>
              <input type="checkbox" />
              <label htmlFor="Upgrade">Renewal</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TypeofOrder;
