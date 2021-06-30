import React from "react";

function Radio(props) {
  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />
        <label class="form-check-label" for={props.id}>
          {props.label}
        </label>
      </div>
    </>
  );
}

export default Radio;
