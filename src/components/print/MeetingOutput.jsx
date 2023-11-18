import PropTypes from "prop-types";
import "./MeetingOutput.css";

MeetingOutput.propTypes = {
  children: PropTypes.any,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default function MeetingOutput({ children, values }) {
  if (
    values === null ||
    values.filter((v) => v.meeting.trim().length).length < 1
  ) {
    return null;
  }

  return (
    <div className="meeting-output-container">
      <div className="meeting-output-description">{children}</div>
      <table className="meeting-output-values" cellSpacing={0}>
        <thead>
          <tr>
            <th>Meeting</th>
            <th>Date/Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {values.map((v) => (
            <tr key={`meeting_${v.id}`}>
              <td>{v.meeting}</td>
              <td>{new Date(v.date).toLocaleString()}</td>
              <td>{v.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
