import React from 'react';
export default class Header extends React.Component {
  render() {
    return (
      <div className="row d-flex justify-content-between align-items-baseline">
        <h1>Student Grade Table</h1>
        <h3 className="text-right">Average Grade<span className="badge badge-secondary ml-2">{this.props.average}</span></h3>
      </div>
    ); // end of return argument list
  } // end of render
} // end of class Header
