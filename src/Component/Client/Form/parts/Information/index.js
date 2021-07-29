import React, { useEffect, useState } from "react";
import { database } from "../../../../../firebase";

// Icon
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Component
import FormWrapper from "../FormWrapper";

function Information({ getInformation }) {
  let [no, setNo] = useState(0);
  const [open, setOpen] = useState(false);

  let ts = Date.now();
  let date_ob = new Date(ts);
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let currentDate = date_ob.toISOString().substring(0, 10);

  let roman;

  const convertRoman = (x) => {
    if (x === 1) {
      return (roman = "I");
    } else if (x === 2) {
      return (roman = "II");
    } else if (x === 3) {
      return (roman = "III");
    } else if (x === 4) {
      return (roman = "IV");
    } else if (x === 5) {
      return (roman = "V");
    } else if (x === 6) {
      return (roman = "VI");
    } else if (x === 7) {
      return (roman = "VII");
    } else if (x === 8) {
      return (roman = "VIII");
    } else if (x === 9) {
      return (roman = "IX");
    } else if (x === 10) {
      return (roman = "X");
    } else if (x === 11) {
      return (roman = "XI");
    } else if (x === 12) {
      roman = "XII";
    }
  };

  const fpb = `/FPB/205/${convertRoman(month)}/${year}`;
  let info1 = "";
  if (no >= 9 && no < 99) {
    info1 = `${year}0${month}0${no + 1}`;
  } else if (no >= 99) {
    info1 = `${year}0${month}${no + 1}`;
  } else {
    info1 = `${year}0${month}00${no + 1}`;
  }

  const hasil = `${info1}${fpb}`;

  useEffect(() => {
    database.ref("data").on("value", (snap) => {
      let total = 0;
      snap.forEach((x) => {
        total += x.numChildren();
      });
      setNo(total);
    });

    const newData = {
      tggl: currentDate,
      fpb: hasil,
      cid: info1,
    };

    getInformation(newData);
  }, [no]);

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
                value={currentDate}
                disabled
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
                value={hasil}
                disabled
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
                value={info1}
                disabled
              />
            </div>
          </div>
        </FormWrapper>
      </div>
    </>
  );
}

export default Information;
