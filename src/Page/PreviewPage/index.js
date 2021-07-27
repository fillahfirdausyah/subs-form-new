import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebase";

// Component
import Template from "../../Component/Template";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

function PreviewPage() {
  const [data, setData] = useState([]);
  const [fpb, setFpb] = useState("");
  const { uid, id } = useParams();

  useEffect(() => {
    let ref = database.ref(`/data/${uid}/${id}`);
    ref.on("value", (snap) => {
      let data = snap.val();
      setData([data]);
      setFpb(data.information.fpb);
    });
  }, []);

  useTitle(fpb);

  return (
    <div>
      <Template data={data} id={id} />
      <button onClick={() => window.print()} className="btn-proses">
        <PictureAsPdfIcon />
      </button>
    </div>
  );
}

function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
}

export default PreviewPage;
