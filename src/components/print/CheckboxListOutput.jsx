import PropTypes from "prop-types";
import "./CheckboxListOutput.css";

CheckboxListOutput.propTypes = {
  children: PropTypes.any,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default function CheckboxListOutput({ children, values }) {
  if (
    values === null ||
    values.filter((v) => v.label.trim().length && v.checked).length < 1
  ) {
    return null;
  }

  return (
    <div className="checkbox-list-output-container">
      <div className="checkbox-list-output-description">{children}</div>
      <ul className="checkbox-list-output-values">
        {values
          .filter((v) => v.label.trim().length && v.checked)
          .map((v, i) => (
            <li key={`nlo_value_${i}`}>{v.label}</li>
          ))}
      </ul>
    </div>
  );
}
