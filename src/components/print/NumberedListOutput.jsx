import PropTypes from "prop-types";
import "./NumberedListOutput.css";

NumberedListOutput.propTypes = {
  children: PropTypes.any,
  values: PropTypes.arrayOf(PropTypes.string),
};

export default function NumberedListOutput({ children, values }) {
  if (values === null || values.filter((v) => v.trim().length).length < 1) {
    return null;
  }

  return (
    <div className="numbered-list-output-container">
      <div className="numbered-list-output-description">{children}</div>
      <ol className="numbered-list-output-values">
        {values
          .filter((v) => v.trim().length)
          .map((v, i) => (
            <li key={`nlo_value_${i}`}>{v}</li>
          ))}
      </ol>
    </div>
  );
}
