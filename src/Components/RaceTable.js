import react, { Component} from 'react';
import { Table, Container, Dropdown, DropdownButton } from 'react-bootstrap';

import './Styles/RaceTable.css';
import TableBody from './TableBody';
import TableHead from './TableHead';
import YearSelect from './YearSelect';



//GENERIC TABLE FOR DATA, BREAK APART INTO COMPONENTS FOR FLEXIBLE SIZING//
export default class RaceTable extends Component{

    render(){
        return(
            <Container fluid={true}>
                <YearSelect />
                <Table  striped bordered hover variant="dark" size="sm" >
                    <TableHead />
                    <TableBody />
                </Table>
            </Container>
        )
    }
}