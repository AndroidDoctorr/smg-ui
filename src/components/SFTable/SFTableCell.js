import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

function SFTableCell(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(props.value);
  switch(props.type) {
    case "editString":
      return (
        <td className="sfTable-cell">
          {isEditing ?
            <input
              value={value}
              onBlur={() => setIsEditing(false)}
              className="sfTable-cellInput"
              onChange={e => setValue(e.target.value)}
            />
            :
            <button
              className="sfTable-cellEditButton button-clear"
              onClick={() => setIsEditing(true)}
            >
              {value}
            </button>
          }
        </td>
      );
    case "date":
      return (
        <td className="sfTable-cell">
          {value.format("MM/DD/YY")}
        </td>
      );
    case "editDate":
      return (
        <td className="sfTable-cell">
          <DatePicker
            selected={value}
            onChange={date => setValue(date)}
          />
        </td>
      );
    case "number":
    case "editNumber":
    case "range":
    case "editRange":
    case "string":
    default:
      return (
        <td className="sfTable-cell">
          {props.value}
        </td>
      );
  }
}

export default SFTableCell;
