import React from "react";
import PropTypes from "prop-types";
import Container from "@cloudscape-design/components/container";
import "./NumberedListInput.css";

NumberedListInput.propTypes = {
  children: PropTypes.any,
  defaultValues: PropTypes.array,
  inputCount: PropTypes.number,
  onChange: PropTypes.func,
};

export default function NumberedListInput({
  children,
  defaultValues,
  inputCount,
  onChange,
}) {
  const [id] = React.useState(Math.floor(Math.random() * 1000000));
  const [values, setValues] = React.useState(
    defaultValues ?? Array.from({ length: inputCount }, () => ""),
  );

  function onInputChange(e) {
    const index = +e.target.dataset.index;
    const newValues = values.map((v, i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return v;
      }
    });
    setValues(newValues);
    if (typeof onChange === "function") {
      onChange(newValues);
    }
  }

  return (
    <Container header={<label>{children}</label>}>
      <div className={`nlc_${id} num-list-input-container`}>
        <ol>
          {values.map((v, i) => (
            <li key={`nli_input_${i}`}>
              <input
                type="text"
                value={values[i]}
                onChange={onInputChange}
                data-index={i}
              />
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
