import { Component } from "react";
import testData from "./TestData";

export default class TableBody extends Component {
  render() {
    return (
      <tbody>
        <>
          {testData.teams &&
            testData.teams.map((item) => {
              return (
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
              );
            })}
        </>
      </tbody>
    );
  }
}
