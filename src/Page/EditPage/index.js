import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Component
import FormEdit from "../../Component/Client/FormEdit";

function EditPage() {
  const { id } = useParams();

  return (
    <div>
      <FormEdit id={id} />
    </div>
  );
}

export default EditPage;
