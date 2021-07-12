import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { database } from "../../firebase";
import { useAuth } from "../../Context/AuthContext";

// Component
import FormEdit from "../../Component/Client/FormEdit";

function EditPage() {
  const { currentUser } = useAuth();
  const { id } = useParams();

  const history = useHistory();

  const updateData = async (data) => {
    try {
      await database.ref(`data/${currentUser.uid}`).child(id).update(data);
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <FormEdit id={id} updateData={updateData} />
    </div>
  );
}

export default EditPage;
