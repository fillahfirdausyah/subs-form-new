import React, { useEffect, useState } from "react";
import { database } from "../../../../../firebase";
import { useAuth } from "../../../../../Context/AuthContext";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import FormWrapper from "../FormWrapper";

function Information({ getInformation, id }) {
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [tanggal, setTanggal] = useState("");
  const [fpb, setFpb] = useState("");
  const [cid, setCid] = useState("");

  useEffect(() => {
    let ref = database.ref(`data/${currentUser.uid}/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      setTanggal(theData.information.tggl);
      setFpb(theData.information.fpb);
      setCid(theData.information.cid);
    });
  }, []);

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header d-flex align-items-center justify-content-between">
          Informasi
          <button
            type="button"
            className="btn btn-sm btn-primary btn-collapsed"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </button>
        </div>
        <FormWrapper in={open}>
          <div class="card-body">
            <div class="mb-3">
              <label for="date" class="form-label">
                Tanggal
              </label>
              <input
                type="date"
                class="form-control"
                id="date"
                disabled
                value={tanggal}
              />
            </div>
            <div class="mb-3">
              <label for="no-fpb" class="form-label">
                No. FPB
              </label>
              <input
                type="text"
                class="form-control"
                id="no-fpb"
                disabled
                value={fpb}
              />
            </div>
            <div class="mb-3">
              <label for="no-cid" class="form-label">
                No. CID
              </label>
              <input
                type="text"
                class="form-control"
                id="no-cid"
                disabled
                value={cid}
              />
            </div>
          </div>
        </FormWrapper>
      </div>
    </>
  );
}

export default Information;
