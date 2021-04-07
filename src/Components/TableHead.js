import { Component } from "react";
import testData from './TestData'


export default class TableHead extends Component{
    render(){
        return(
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
        )
    }
}