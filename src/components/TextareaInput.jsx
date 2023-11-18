import React from "react";
import PropTypes from "prop-types";
import Container from "@cloudscape-design/components/container";
import Textarea from "@cloudscape-design/components/textarea";
import "./TextareaInput.css";

TextareaInput.propTypes = {
  children: PropTypes.any,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default function TextareaInput({ children, defaultValue, onChange }) {
  const [id] = React.useState(Math.floor(Math.random() * 1000000));
  const [value, setValue] = React.useState(defaultValue ?? "");

  React.useEffect(() => {
    if (typeof onChange === "function") {
      onChange(value);
    }
  }, [value]);

  function onInputChange({ detail }) {
    setValue(detail.value);
  }

  return (
    <Container header={<label>{children}</label>}>
      <div className={`ti_${id} textarea-input-container`}>
        <Textarea
          value={value}
          onChange={onInputChange}
          className="textarea-input-textarea"
        />
      </div>
    </Container>
  );
}
