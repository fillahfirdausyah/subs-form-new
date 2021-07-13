import React, { useState } from "react";

// Component
import SubscriptionFee from "./parts/SubscriptionFee";
import Filledby from "./parts/FilledBy";
import DocumentReq from "./parts/DocumentReq";

function Form({ updateData }) {
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

    updateData(newData);
  };

  return (
    <div>
      <div className="main mt-5">
        <div className="container">
          <form onSubmit={sumbitHandler}>
            {/* Biaya Berlanggana */}
            <SubscriptionFee getSubscriptionFee={getSubscriptionFee} />

            {/* Diisi Oleh */}
            <Filledby getFilledBy={getFilledBy} />

            {/* Kelengkapan Dokumens */}
            <DocumentReq getDocumentReq={getDocumentReq} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
