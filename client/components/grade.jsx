import React from 'react';

export default class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td onClick={() => this.props.deleteGrade(this.props.grade.id)}><button type="button" className="btn btn-danger">DELETE</button></td>
      </tr>
    ); // end of return argument list
  } // end of render
} // end of class Grade
