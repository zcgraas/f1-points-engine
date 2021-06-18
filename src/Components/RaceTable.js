import React, { Component } from "react";
import { Table, Container, Dropdown, DropdownButton } from "react-bootstrap";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import YearSelect from "./YearSelect";

export default class RaceTable extends Component {
  render() {
    return (
      <Container fluid={true} className="table-container">
        <style jsx>
          {`
            .table-container {
              overflow-x: scroll;
            }

            .spacing {
              margin-bottom: 5px;
            }

            .table {
              border-radius: 6px;
            }
          `}
        </style>
        <YearSelect />
        <Table
          className="table"
          striped
          bordered
          hover
          variant="light"
          size="sm"
        >
          <TableHead />
          <TableBody />
        </Table>
      </Container>
    );
  }
}
