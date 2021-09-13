import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
const TableAndTextSection = ({ data }) => {
  return (
    <Fragment>
      <h2 className={"text-center"}>{data.title}</h2>
      <p>{data.subtext}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            {data.table.heading.map(({ title }, i) => (
              <th key={i}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.table.column.map(({ columnData }, i) =>
            columnData.map(({ row }, i) => (
              <tr key={i}>
                {row.map(({ data }, i) => (
                  <td key={i}>{data}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <p>{data.text}</p>
    </Fragment>
  );
};

TableAndTextSection.propTypes = {
  data: PropTypes.object,
};
export default TableAndTextSection;
