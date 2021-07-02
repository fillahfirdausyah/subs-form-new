import React from "react";
import { Collapse, Container } from "react-bootstrap";

function FormWrapper(props) {
  return (
    <>
      <Collapse in={props.in}>
        <Container>{props.children}</Container>
      </Collapse>
    </>
  );
}

export default FormWrapper;
