import React from "react";

// Component
import { RadioTemplate } from "../../../Radio";

function ServiceOrder({ data }) {
  const radioData = [
    {
      name: "serviceOrder",
      id: "internet",
      label: "INTERNET",
      val: "Internet",
    },
    {
      name: "serviceOrder",
      id: "voip",
      label: "VOIP",
      val: "Voip",
    },
    {
      name: "serviceOrder",
      id: "vps",
      label: "VPS",
      val: "Vps",
    },
    {
      name: "serviceOrder",
      id: "internet",
      label: "SOFTWARE AS SERVICE ",
      val: "SoftWareAsService",
    },
  ];

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
              {radioData.map((x) => (
                <RadioTemplate name={x.name} value={x.val} label={x.label} />
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <p>Spesifikasi Layanan /</p>{" "}
              <p className="font-italic">Spesification of Services</p>
            </td>
            <td>
              <input type="text" disabled value={data.spesifikasiLayanan} />
            </td>
          </tr>
          <tr>
            <td>
              <p>Informasi Tambahan /</p>{" "}
              <p className="font-italic">Additional Info</p>
            </td>
            <td>
              <input type="text" disabled value={data.informasiTambahan} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServiceOrder;
