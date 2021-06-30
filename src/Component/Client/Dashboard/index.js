import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";

// Style
import "./style.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div class="card card-dashboard">
          <div className="card-header d-flex align-items-center">
            <img
              src="https://salewalker.in/wp-content/uploads/2020/09/tony-strart-sunglass4.jpg"
              class="img-fluid"
              alt="..."
            />
            <p class="card-text mx-5">
              <li>Nama : Tonny Stark</li>
              <li>Email : Tony@avengers.com</li>
            </p>
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
                  <div class="card card-list-form">
                    <div class="card-body">
                      <h5 class="card-title" style={{ fontWeight: "100px" }}>PT. Avengers</h5>
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
