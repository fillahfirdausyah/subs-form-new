import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { database, storage } from "../../firebase";

// Component
import Form from "../../Component/Marketing/Form";

function LengkapiPage() {
  const { uid, id } = useParams();
  const history = useHistory();

  const updateData = async (data) => {
    try {
      let ref = database.ref(`data/${uid}/${id}`);
      await ref.update(data);
      let storageRef = storage.ref();
      const fileRef = storageRef.child(`images/${data.filledBy.imgName}`);
      await fileRef.put(data.filledBy.ttd);
      history.push("/marketing");
    } catch (err) {
      console.log(err);
    }
  };
  return <Form updateData={updateData} />;
}

export default LengkapiPage;
