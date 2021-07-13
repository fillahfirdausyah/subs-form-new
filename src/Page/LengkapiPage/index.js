import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { database } from "../../firebase";

// Component
import Form from "../../Component/Marketing/Form";

function LengkapiPage() {
  const { uid, id } = useParams();
  const history = useHistory();

  const updateData = async (data) => {
    try {
      let ref = database.ref(`data/${uid}/${id}`);
      await ref.update(data);
      history.push("/marketing");
    } catch (err) {
      console.log(err);
    }
  };
  return <Form updateData={updateData} />;
}

export default LengkapiPage;
