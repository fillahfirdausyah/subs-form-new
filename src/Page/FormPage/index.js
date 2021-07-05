import React from "react";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase";
import { useAuth } from "../../Context/AuthContext";

// Component
import Form from "../../Component/Client/Form";

function FormPage() {
  const { currentUser } = useAuth();
  const history = useHistory();

  const postHandler = async (data) => {
    try {
      await database.ref("data/" + currentUser.uid).push(data);
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return <Form postData={postHandler} />;
}

export default FormPage;
