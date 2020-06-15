import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    }; // end of constructor
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: this.state.grades.concat(data)
        }); // end of setState
      })// end of 2nd .then
      .catch(error => console.error(error));
  }// end of addNewGrade

  deleteGrade(id) {
    fetch(`/api/grades/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: this.state.grades.filter(el => el.id !== id)
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Header average={this.getAverageGrade()} />
        <div className="row mt-4">
          <div className="col-md-8">
            <GradeTable deleteGrade={this.deleteGrade} grades={this.state.grades} />
          </div>
          <div className="col-md-4">
            <h2 className="mb-4">Add Grade</h2>
            <GradeForm addNewGrade={this.addNewGrade}/>
          </div>
        </div>
      </div> // end of container div
    );
  }
} // end of class App
