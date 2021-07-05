import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebase";
import { useAuth } from "../../Context/AuthContext";

// Component
import Template from "../../Component/Template";

function PreviewPage() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const { currentUser } = useAuth();

  useEffect(() => {
    let ref = database.ref(`/data/${currentUser.uid}/${id}`);
    ref.on("value", (snap) => {
      setData([snap.val()]);
    });
  }, []);

  return (
    <div>
      <Template data={data} id={id} />
    </div>
  );
}

export default PreviewPage;
