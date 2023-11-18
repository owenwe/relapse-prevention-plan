import React from "react";
import PropTypes from "prop-types";
import Container from "@cloudscape-design/components/container";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import "./CheckboxList.css";

CheckboxList.propTypes = {
  children: PropTypes.any,
  defaultValues: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

export default function CheckboxList({ children, defaultValues, onChange }) {
  const [id] = React.useState(Math.floor(Math.random() * 1000000));
  const [values, setValues] = React.useState(
    defaultValues ?? [{ label: "", checked: false, isBlank: true }],
  );

  function onInputChange(e) {
    const index = +e.target.dataset.index;
    const label = e.target.dataset.label;
    const newValues = values.map((v, i) => {
      if (i === index) {
        return { checked: e.target.checked, label: label };
      } else {
        return v;
      }
    });
    setValues(newValues);
    if (typeof onChange === "function") {
      onChange(newValues);
    }
  }

  function onBlankInputChange(e) {
    const index = +e.target.dataset.index;
    const newValues = values.map((v, i) => {
      if (i === index) {
        if (e.target.type === "checkbox") {
          return {
            label: v.label,
            checked: e.target.checked,
            isBlank: v.isBlank,
          };
        }
        if (e.target.type === "text") {
          return {
            label: e.target.value,
            checked: v.checked,
            isBlank: v.isBlank,
          };
        }
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
      <ColumnLayout columns={3} className={`cbl_${id} checkbox-list-container`}>
        {values.map((v, i) => {
          if (v.isBlank) {
            return (
              <div key={`cbl_blank_${i}`} className="cbl-blank-container">
                <input
                  type="checkbox"
                  checked={values[i].checked}
                  onChange={onBlankInputChange}
                  data-index={i}
                />
                <input
                  type="text"
                  value={values[i].label}
                  onChange={onBlankInputChange}
                  data-index={i}
                />
              </div>
            );
          } else {
            return (
              <div key={`${i}_${v.label}`} className="cbl-option-container">
                <label>
                  <input
                    type="checkbox"
                    checked={values[i].checked}
                    onChange={onInputChange}
                    data-index={i}
                    data-label={v.label}
                  />
                  <span>{v.label}</span>
                </label>
              </div>
            );
          }
        })}
      </ColumnLayout>
    </Container>
  );
}
