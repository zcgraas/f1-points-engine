import { Component } from 'react' 
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default class YearSelect extends Component{
    render(){
        return(
            <Dropdown className="spacing">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    2020
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}