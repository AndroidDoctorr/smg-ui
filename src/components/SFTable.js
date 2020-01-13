import React from 'react';

function SFTable(props) {
  return (
    <div className="sfTable-container">
      <table className="sfTable">
        <thead className="sfTable-head">
          <tr className="sfTable-headRow">
            {Object.keys(props.columns).map(column =>
              <th className="sfTable-column">{column.name}</th>
            )}
          </tr>
        </thead>
        <tbody className="sfTable-body">
          {Object.keys(props.items).map(item =>
            <tr className="sfTable-row">
              {Object.keys(props.columns).map(column =>
                <td className="sfTable-cell">
                  {item[column.keyName]}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SFTable;
