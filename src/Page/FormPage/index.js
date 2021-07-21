import React from "react";
import { useHistory } from "react-router-dom";
import { database, storage } from "../../firebase";
import { useAuth } from "../../Context/AuthContext";

// Component
import Form from "../../Component/Client/Form";

function FormPage() {
  const { currentUser } = useAuth();
  const history = useHistory();

  const postHandler = async (data) => {
    try {
      await database.ref("data/" + currentUser.uid).push(data);
      let storageRef = storage.ref();
      const fileRef = storageRef.child(`images/${data.client.imgName}`);
      await fileRef.put(data.client.ttd);
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
    // console.log(data.client.ttd);
  };

  return <Form postData={postHandler} />;
}

export default FormPage;
