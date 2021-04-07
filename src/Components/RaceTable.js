import react, { Component} from 'react';
import { Table } from 'react-bootstrap';
import './Styles/RaceTable.css';
import testData from './TestData.js'


//GENERIC TABLE FOR DATA, BREAK APART INTO COMPONENTS FOR FLEXIBLE SIZING//
export default class RaceTable extends Component{

    render(){
        return(
            <div className="table-container">
                <Table  striped bordered hover variant="dark" size="sm" >
                    <thead>
                        <tr>
                            <th>Driver Name</th>
                            <th>Driver Team</th>
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
                        <>
                        {
                            testData.teams && testData.teams.map((item)=> {
                                
                                return(
                                    <>
                                    <tr>
                                        <td>{item.driver1}</td>
                                        <td>{item.team}</td>
                                    </tr>
                                    <tr>
                                        <td>{item.driver2}</td>
                                        <td>{item.team}</td>
                                    </tr>
                                    </>
                                )
                            })
                        }
                        </>
                    </tbody>
                </Table>
            </div>
        )
    }
}