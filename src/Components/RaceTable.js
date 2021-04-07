import react, { Component} from 'react';
import { Table } from 'react-bootstrap';
import './Styles/RaceTable.css';
import testData from './TestData.js'

function setRaces(){

}

export default class RaceTable extends Component{

    render(){
        return(
            <div className="table-container">
                <Table  striped bordered hover variant="dark" size="sm" >
                    <thead>
                        <tr>
                            <th>Driver Name</th>
                            {
                                testData.races && testData.races.map((item) => {
                                    return(
                                        <th>{item.title}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hamilton</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                        <tr>
                            <td>Hamilton</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}