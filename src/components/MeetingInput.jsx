import React from "react";
import PropTypes from "prop-types";
import Container from "@cloudscape-design/components/container";
import { SpaceBetween } from "@cloudscape-design/components";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
import Icon from "@cloudscape-design/components/icon";
import Modal from "@cloudscape-design/components/modal";
import Box from "@cloudscape-design/components/box";
import "./MeetingInput.css";

MeetingInput.propTypes = {
  children: PropTypes.any,
  defaultValues: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

let meetingId = 0;

export default function MeetingInput({ children, defaultValues, onChange }) {
  const [id] = React.useState(Math.floor(Math.random() * 1000000));
  const [showInputView, setShowInputView] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [showRemoveModal, setShowRemoveModal] = React.useState(false);
  const [removeId, setRemoveId] = React.useState(null);
  const [meeting, setMeeting] = React.useState(resetMeeting());
  const [values, setValues] = React.useState(defaultValues ?? []);

  function resetMeeting() {
    return { id: null, meeting: "", date: "", location: "" };
  }

  function showMeetingInputView(e) {
    e.preventDefault();
    setMeeting(resetMeeting());
    setShowInputView(true);
  }

  function showRemoveModalView(id) {
    setShowRemoveModal(true);
    setRemoveId(id);
  }

  function dismissRemoveModalView() {
    setShowRemoveModal(false);
  }

  function handleRemoveModalConfirm() {
    removeMeeting(removeId);
    setShowRemoveModal(false);
  }

  function cancelAddMeetingClick(e) {
    e.preventDefault();
    setMeeting(resetMeeting());
    setShowInputView(false);
    setEditMode(false);
  }

  function addMeetingClick(e) {
    e.preventDefault();
    const newValues = [...values, { ...meeting, id: meetingId++ }];
    setValues(newValues);
    setShowInputView(false);

    if (typeof onChange === "function") {
      onChange(newValues);
    }
  }

  function saveMeetingClick(e) {
    e.preventDefault();
    const newValues = values.map((v) => {
      if (v.id === meeting.id) {
        return { ...meeting };
      } else {
        return v;
      }
    });
    setValues(newValues);
    setShowInputView(false);
    setEditMode(false);

    if (typeof onChange === "function") {
      onChange(newValues);
    }
  }

  function editMeetingClick(id) {
    const filteredMeetings = values.filter((v) => v.id === id);
    if (filteredMeetings.length) {
      setMeeting(filteredMeetings[0]);
      setEditMode(true);
      setShowInputView(true);
    }
  }

  function removeMeeting(id) {
    const newValues = values.filter((v) => v.id !== id);
    setValues(newValues);

    if (typeof onChange === "function") {
      onChange(newValues);
    }
  }

  return (
    <Container header={<label>{children}</label>}>
      <Modal
        visible={showRemoveModal}
        onDismiss={dismissRemoveModalView}
        footer={
          <Box float="right">
            <SpaceBetween size="xs" direction="horizontal">
              <Button variant="link" onClick={dismissRemoveModalView}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleRemoveModalConfirm}>
                Ok
              </Button>
            </SpaceBetween>
          </Box>
        }
      >
        Confirm that you want to remove the following meeting:
        <ul className="remove-meeting-details">
          {values.find((v) => v.id === removeId) !== undefined
            ? Object.entries(values.filter((v) => v.id === removeId)[0]).map(
                (m, i) => (
                  <li key={`rm_${i}`}>
                    <strong>{`${m[0]}: `}</strong>
                    {m[1]}
                  </li>
                ),
              )
            : null}
        </ul>
      </Modal>
      <div className={`cbl_${id} meeting-container`}>
        <div className="meeting-values-view">
          {values.length ? (
            <>
              <div className="mvv-meeting-container-header">
                <div className="mvv-header"></div>
                <div className="mvv-header">Meeting</div>
                <div className="mvv-header">Date/Time</div>
                <div className="mvv-header">Location</div>
              </div>
              {values.map((v, i) => (
                <div key={`meeting_${i}`} className="mvv-meeting-container">
                  <div className="mvv-action mvv-item">
                    {!editMode ? (
                      <SpaceBetween
                        size="l"
                        direction="horizontal"
                        alignItems="center"
                      >
                        <Link onFollow={() => showRemoveModalView(v.id)}>
                          <Icon
                            name="remove"
                            alt="remove meeting"
                            variant="normal"
                          />
                        </Link>
                        <Link onFollow={() => editMeetingClick(v.id)}>
                          <Icon name="edit" alt="edit meeting" />
                        </Link>
                      </SpaceBetween>
                    ) : null}
                  </div>
                  <div className="mvv-meeting mvv-item">{v.meeting}</div>
                  <div className="mvv-date mvv-item">
                    {new Date(v.date).toLocaleString()}
                  </div>
                  <div className="mvv-location mvv-item">{v.location}</div>
                </div>
              ))}
            </>
          ) : null}
          {!showInputView ? (
            <Button onClick={showMeetingInputView} variant="primary">
              Add Meeting
            </Button>
          ) : null}
        </div>
        {showInputView ? (
          <div className="meeting-input-container">
            <SpaceBetween size="s" direction="horizontal" alignItems="center">
              <div>
                <label>
                  Meeting:
                  <input
                    type="text"
                    placeholder="meeting name"
                    value={meeting.meeting}
                    onChange={(e) =>
                      setMeeting({ ...meeting, meeting: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Date and Time:
                  <input
                    type="datetime-local"
                    value={meeting.date}
                    onChange={(e) =>
                      setMeeting({ ...meeting, date: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Location:
                  <input
                    type="text"
                    placeholder="meeting location"
                    value={meeting.location}
                    onChange={(e) =>
                      setMeeting({ ...meeting, location: e.target.value })
                    }
                  />
                </label>
              </div>
              {!editMode ? (
                <Button onClick={addMeetingClick} variant="primary">
                  Add
                </Button>
              ) : null}
              {editMode ? (
                <Button onClick={saveMeetingClick}>Save</Button>
              ) : null}
              <Button onClick={cancelAddMeetingClick}>Cancel</Button>
            </SpaceBetween>
          </div>
        ) : null}
      </div>
    </Container>
  );
}
