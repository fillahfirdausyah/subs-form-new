import React from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

// Icon
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// Context
import { useAuth } from "../../../Context/AuthContext";

// Style
import "./style.css";

function Dashboard() {
  const { logout, currentUser } = useAuth();

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
              </p>
            </div>
            <button className="btn btn-danger" onClick={handleLogout}>
              <ExitToAppIcon />
            </button>
          </div>
          <div class="card-body mt-4">
            <div className="list-form d-flex align-items-center justify-content-between">
              <h3>Daftar Subsform</h3>
              <Link to="/form" className="btn btn-primary">
                <AddCircleIcon />
              </Link>
            </div>
            <div className="list-subsform mt-3">
              <div className="row">
                <div className="col-6 mt-3">
                  <div class="card card-list-form bg-primary">
                    <div class="card-body">
                      <h5 class="card-title" style={{ fontWeight: "100px" }}>
                        PT. Avengers
                      </h5>
                      <p class="card-text">
                        <li>Email : Avengers@avengers.com</li>
                        <li>Penanggun Jawab: Tony Stark</li>
                      </p>
                      <a href="" className="btn btn-primary">
                        <VisibilityIcon />
                      </a>
                      <a href="" className="btn mx-2 btn-success">
                        <EditIcon />
                      </a>
                      <a href="" className="btn btn-danger">
                        <DeleteIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
