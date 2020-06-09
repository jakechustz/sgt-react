import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    }; // end of constructor
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    if (this.state.grades.length > 0) {
      let count = 0;
      for (let ii = 0; ii < this.state.grades.length; ii++) {
        count += this.state.grades[ii].grade;
      } // end of for loop
      return Math.ceil(count / this.state.grades.length);
    } // end of if statement
  } // end of getAverageGrade

  render() {
    return (
      <div className="container">
        <Header average={this.getAverageGrade()}/>
        <GradeTable grades={this.state.grades} />
      </div> // end of container div
    );
  }
} // end of class App
