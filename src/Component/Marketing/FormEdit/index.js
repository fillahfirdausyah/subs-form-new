import React, { useState } from "react";
import DoneIcon from "@material-ui/icons/Done";

// Component
import SubscriptionFee from "./parts/SubscriptionFee";
import Filledby from "./parts/FilledBy";
import DocumentReq from "./parts/DocumentReq";

function FormEdit({ uid, id }) {
  const [subscriptionFee, setSubscriptionFee] = useState({});
  const [filledBy, setFilledBy] = useState({});
  const [documentReq, setDocumentReq] = useState({});

  const getSubscriptionFee = (data) => {
    setSubscriptionFee(data);
  };

  const getFilledBy = (data) => {
    setFilledBy(data);
  };

  const getDocumentReq = (data) => {
    setDocumentReq(data);
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    const newData = {
      subscriptionFee,
      filledBy,
      documentReq,
    };

    // updateData(newData);
    console.log(newData);
  };

  return (
    <div>
      <div className="main mt-5">
        <div className="container">
          <div className="w-100 form-main" style={{ maxWidth: "700px" }}>
            <h1>Edit</h1>
            <form onSubmit={sumbitHandler}>
              {/* Biaya Berlanggana */}
              <SubscriptionFee
                uid={uid}
                id={id}
                getSubscriptionFee={getSubscriptionFee}
              />

              {/* Diisi Oleh */}
              <Filledby uid={uid} id={id} getFilledBy={getFilledBy} />

              {/* Kelengkapan Dokumens */}
              <DocumentReq uid={uid} id={id} getDocumentReq={getDocumentReq} />

              <button type="submit" className="btn-proses">
                <DoneIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormEdit;
