import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database, storage } from "../../firebase";

// Component
import FormEdit from "../../Component/Marketing/FormEdit";

function LengkapiEditPage() {
  const { uid, id } = useParams();
  const history = useHistory();

  return <FormEdit id={id} uid={uid} />;
}

export default LengkapiEditPage;
