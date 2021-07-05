import React from "react";

function SubscriptionFee() {
  return (
    <div className="subscription-fee">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">BIAYA BERLANGGANAN</span>{" "}
            <span className="font-italic">/ Subscription Fee</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Biaya Set Up/</p> <p className="font-italic">Set Up Cost</p>
              <br />
              <span>(One Time Charge)</span>
            </td>
            <td>
              <input type="text" placeholder="Rp" />
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td>
              <p>Biaya Layanan /</p>{" "}
              <p className="font-italic">Cost of Services</p>
              <br />
              <span>(Monthly Charge)</span>
            </td>
            <td>
              <input type="text" placeholder="Rp" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SubscriptionFee;
