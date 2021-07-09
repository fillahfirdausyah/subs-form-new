import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { database } from "../../firebase";
import { useAuth } from "../../Context/AuthContext";

// Component
import FormEdit from "../../Component/Client/FormEdit";

function EditPage() {
  const { id } = useParams();
  const { currentUser } = useAuth();

  //Edited Data
  const [editData, setEditData] = useState({});
  useEffect(() => {
    let ref = database.ref(`data/${currentUser.uid}/${id}`);
    ref.on("value", (snapshot) => {
      setEditData(snapshot.val());
    });
  }, []);
  // End Edited Data

  return (
    <div>
      <FormEdit id={id} editData={editData} />
    </div>
  );
}

export default EditPage;
