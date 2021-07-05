import React from "react";

function Information(props) {
  return (
    <div className="information">
      <div className="date">
        <input type="date" value={props.data.tggl} disabled />
      </div>
      <div className="fpb-info">
        <table>
          <tr>
            <td>No. FPB :</td>
            <td>
              <input type="text" className="input-no" value={props.data.fpb} disabled />
            </td>
          </tr>
          <tr>
            <td>No. CID :</td>
            <td>
              <input type="text" className="input-no" value={props.data.cid} disabled />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Information;
