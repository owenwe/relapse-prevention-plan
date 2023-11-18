import PropTypes from "prop-types";
import "./MultiNumericOutput.css";

MultiNumericOutput.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.array,
};

export default function MultiNumericOutput({ questions, values }) {
  if (values === null || values.length < 1) {
    return null;
  }
  return (
    <div className="multi-number-output-container">
      {questions.map((q, i) => (
        <div
          key={`mno_${i}`}
          className="multi-number-output-question-container"
        >
          <div className="multi-number-output-question">{q}</div>
          <div className="multi-number-output-value">{values[i]}</div>
        </div>
      ))}
    </div>
  );
}
