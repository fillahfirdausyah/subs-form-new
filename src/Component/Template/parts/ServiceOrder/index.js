import React from "react";

function ServiceOrder() {
  return (
    <div className="services-order">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">LAYANAN YANG DIMINTA</span>{" "}
            <span className="font-italic">/ Services Order</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Jenis Layanan /</p>{" "}
              <p className="font-italic">Kind of Services</p>
            </td>
            <td className="services" colSpan="2">
              <input type="checkbox" id="internet" />
              <label htmlFor="internet">Internet</label>
              <input type="checkbox" />
              <label htmlFor="Upgrade">VOIP</label>
              <input type="checkbox" />
              <label htmlFor="Upgrade">VPS</label>
              <input type="checkbox" />
              <label htmlFor="Upgrade" className="label-upgrade">
                <p>SOFTWARE AS SERVICE</p>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <p>Spesifikasi Layanan /</p>{" "}
              <p className="font-italic">Spesification of Services</p>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Informasi Tambahan /</p>{" "}
              <p className="font-italic">Additional Info</p>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServiceOrder;
