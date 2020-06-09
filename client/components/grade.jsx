import React from 'react';

export default class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
      </tr>
    ); // end of return argument list
  } // end of render
} // end of class Grade
