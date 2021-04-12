import react, { Component } from "react";
import { Table, Container, Dropdown, DropdownButton } from "react-bootstrap";
import "./Styles/RaceTable.css";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import YearSelect from "./YearSelect";

export default class RaceTable extends Component {
  render() {
    return (
      <Container fluid={true} className="table-container">
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
