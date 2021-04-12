import { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default class YearSelect extends Component {
  render() {
    return (
      <Form inline className="spacing">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    );
  }
}
