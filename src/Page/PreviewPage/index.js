import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebase";

// Component
import Template from "../../Component/Template";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

function PreviewPage() {
  const [data, setData] = useState([]);
  const { uid, id } = useParams();

  useEffect(() => {
    let ref = database.ref(`/data/${uid}/${id}`);
    ref.on("value", (snap) => {
      setData([snap.val()]);
    });
  }, []);

  return (
    <div>
      <Template data={data} id={id} />
      <button onClick={() => window.print()} className="btn-proses">
        <PictureAsPdfIcon />
      </button>
    </div>
  );
}

export default PreviewPage;
