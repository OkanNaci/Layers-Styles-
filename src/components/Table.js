import { Fragment } from "react";

function Table({ fruits, config, keyFn }) {
  const renderedHeaders = config.map((column) => (
    <Fragment key={column.label}>
      {column.header ? column.header() : column.label}
    </Fragment>
  ));

  const renderedRows = fruits.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td className="p-2" key={column.label}>
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-3">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
