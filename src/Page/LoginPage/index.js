import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

// Context
import { useAuth } from "../../Context/AuthContext";

// Asset
import "./style.css";

function LoginPage() {
  const { loginWithGoogle } = useAuth();
  const history = useHistory();

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      history.push("/dashboard");
    } catch (err) {
      alert("ada yang salah");
    }
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "450px" }}>
          <Card
            className="login-form"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
                <Form.Group id="password" className="mt-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Button type="submit" className="w-100 mt-4">
                  Login
                </Button>
                <hr />
              </Form>
              <Button
                type="submit"
                onClick={handleLoginWithGoogle}
                className="w-100 mt-2 mb-4"
              >
                <FcGoogle /> Google
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
