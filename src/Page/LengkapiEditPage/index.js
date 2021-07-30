import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database, storage } from "../../firebase";

// Component
import FormEdit from "../../Component/Marketing/FormEdit";

function LengkapiEditPage() {
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

  return <FormEdit id={id} uid={uid} updateData={updateData} />;
}

export default LengkapiEditPage;
