import React from "react";

function Radio(props) {
  return (
    <>
      <div class="form-check">
        <input
          required
          class="form-check-input"
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          checked={props.checked && true}
        />
        <label class="form-check-label" for={props.id}>
          {props.label}
        </label>
      </div>
    </>
  );
}

export function RadioTemplate(props) {
  return (
    <>
      <input
        class="form-check-input template"
        type="checkbox"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked && true}
        disabled={props.disabled && true}
      />
      <label class="form-check-label template" for={props.id}>
        {props.label}
      </label>
    </>
  );
}

export default Radio;
