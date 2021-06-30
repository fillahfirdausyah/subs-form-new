import React from "react";

// Component
import Radio from '../../../Radio'

function DocumentReq() {

    const xkl= [
        {
            name: 'document',
            id: 'type1',
            label: 'Fotokopi KTP / Paspor / Copy of ID / Passport'
        },
        {
            name: 'document',
            id: 'type2',
            label: 'Fotokopi NPWP / Copy of Tax Registered Number'
        },
        {
            name: 'document',
            id: 'type2',
            label: 'Surat Kuasa (apabila dikuasakan)'
        }
    ]

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Kelengkapan dokumen pelanggan baru</div>
        <div class="card-body">
          <table className="main-page">
            <tr>
              <td>Dokumen</td>
              <td>
                {xkl.map((x) => (
                  <Radio
                    name={x.name}
                    key={x.id}
                    id={x.id}
                    label={x.label}
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

export default DocumentReq;
