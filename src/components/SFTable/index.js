import React from 'react';
import './style.css';
import SFTableCell from './SFTableCell';

function SFTable(props) {
  return (
    <div className="sfTable-container">
      <div className="sfTable-saveWarning">
        SAVE CHANGES
      </div>
      <table className="sfTable">
        <thead className="sfTable-head">
          <tr className="sfTable-headRow">
            {props.columns.map(column =>
              <th className="sfTable-column">{column.name}</th>
            )}
            {props.canDelete &&
              <th className="sfTable-column sfTable-column--shrink">
                {"Delete"}
              </th>
            }
          </tr>
        </thead>
        <tbody className="sfTable-body">
          {props.items.map((item, index) =>
            <tr className="sfTable-row">
              {props.columns.map(column =>
                <SFTableCell
                  value={item[column.keyName]}
                  type={column.type}
                  index={index}
                />
              )}
              {props.canDelete &&
                <td className="sfTable-cell sfTable-cell--shrink">
                  <button
                    className="sfTable-deleteButton"
                    onClick={() => props.onDelete(index)}
                  >
                    x
                  </button>
                </td>
              }
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SFTable;
