import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    }; // end of constructor
  } // end of object literal

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(inputGrades => {
        this.setState({
          grades: inputGrades
        }); // end of setState
      }) // end of .then
      .catch(error => console.error(error));
  } // end of componentDidMount

  render() {
    return (
      <div className="container">
        <Header />
        <GradeTable grades={this.state.grades} />
      </div> // end of container div
    );
  }
} // end of class App
