import PropTypes from "prop-types";
import "./TextareaOutput.css";

TextareaOutput.propTypes = {
  children: PropTypes.any,
  value: PropTypes.string,
};

export default function TextareaOutput({ children, value }) {
  if (value === null || value.trim().length < 1) {
    return null;
  }

  return (
    <div className="textarea-output-container">
      <div className="textarea-output-description">{children}</div>
      <div className="textarea-output-value">{value}</div>
    </div>
  );
}
