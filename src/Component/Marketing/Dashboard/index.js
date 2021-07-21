import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { database } from "../../../firebase";

// Icon
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

// Context
import { useAuth } from "../../../Context/AuthContext";

// Style
import "./style.css";

function Dashboard() {
  const { logout, currentUser } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data`);
    ref.on("value", (res) => {
      const newData = [];
      const newObj = [];
      const snap = res.val();
      res.forEach((x, i) => {
        let node = x.val();
        newObj.push(node);
      });
      let obj = Object.assign({}, ...newObj);
      for (const key in obj) {
        const x = {
          id: key,
          ...obj[key],
        };
        newData.push(x);
      }
      setData(newData);
    });
  }, []);

  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="dashboard">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div class="card card-dashboard">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="user-info d-flex align-items-center">
              <img src={currentUser.photoURL} class="img-fluid" alt="..." />
              <p class="card-text mx-5">
                <li>Nama : {currentUser.displayName}</li>
                <li>Email : {currentUser.email}</li>
                <li>Role : Marketing</li>
              </p>
            </div>
            <button className="btn btn-danger" onClick={handleLogout}>
              <ExitToAppIcon />
            </button>
          </div>
          <div class="card-body mt-4">
            <div className="list-form d-flex align-items-center justify-content-between">
              <h3>Daftar Client</h3>
            </div>
            <div className="list-subsform mt-3">
              <div className="row">
                {data.map((x, index) => (
                  <div className="col-md-6 mt-3" key={x.id}>
                    <div class="card card-list-form bg-primary">
                      <div class="card-body">
                        <h5 class="card-title" style={{ fontWeight: "100px" }}>
                          {x.infoPerusahaan.namaPerusahaan}
                        </h5>
                        <p class="card-text">
                          <li>Email : {x.infoPerusahaan.alamatEmail}</li>
                          <li>Penanggun Jawab: {x.authorized.nama}</li>
                        </p>
                        <Link
                          className="btn btn-primary"
                          to={`/preview/${x.uid}/${x.id}`}
                        >
                          <VisibilityIcon />
                        </Link>
                        <Link
                          to={`lengkapi/${x.uid}/${x.id}`}
                          className="btn mx-1 btn-success"
                        >
                          <EditIcon />
                        </Link>
                        <a href="" className="btn mx-2 btn-danger">
                          <DeleteIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
