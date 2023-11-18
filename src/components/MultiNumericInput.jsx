import React from "react";
import PropTypes from "prop-types";
import Container from "@cloudscape-design/components/container";
import "./MultiNumericInput.css";

MultiNumericInput.propTypes = {
  defaultValues: PropTypes.array,
  questions: PropTypes.arrayOf(PropTypes.string),
  beforeDescription: PropTypes.any,
  afterDescription: PropTypes.any,
  onChange: PropTypes.func,
};

export default function MultiNumericInput({
  defaultValues,
  questions = [],
  beforeDescription = null,
  afterDescription = null,
  onChange,
}) {
  const [id] = React.useState(Math.floor(Math.random() * 1000000));
  const [values, setValues] = React.useState(
    defaultValues ?? questions.map(() => ""),
  );

  function onInputChange(e) {
    const index = +e.target.dataset.index;
    const newValues = values.map((v, i) => (i === index ? e.target.value : v));
    setValues(newValues);
    if (typeof onChange === "function") {
      onChange(newValues);
    }
  }

  return (
    <Container>
      <div className={`mni_${id} multi-num-input-container`}>
        {beforeDescription ?? null}
        {questions.map((q, i) => (
          <div key={`mni_${i}`} className="mni-question">
            <label>
              {q}
              <input
                type="number"
                value={values[i]}
                onChange={onInputChange}
                data-index={i}
              />
            </label>
          </div>
        ))}
        {afterDescription ?? null}
      </div>
    </Container>
  );
}
