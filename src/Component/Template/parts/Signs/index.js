import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase";

function Signs({ data }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    let ref = storage.ref(`images/${data.imgName}`);
    ref.getDownloadURL().then((url) => {
      setImage(url);
    });
  }, []);

  return (
    <div className="sign">
      <div className="pt-buana">
        <h4>*{")"} PT. Buana Lintas Media</h4>
      </div>
      <div className="pt">
        <h4>
          *{")"} PT. {data.namaPT}
        </h4>
      </div>
      <div className="line-pt-buana">
        <input type="text" />
      </div>
      <div className="line-pt">
        {/* <input type="text" /> */}
        <img src={image || "https://via.placeholder.com/400x300"} alt="" />
      </div>
    </div>
  );
}

export default Signs;
