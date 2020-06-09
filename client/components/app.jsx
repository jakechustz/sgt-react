import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
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
        <div className="row">
          <div className="col pt-6">
            <Header />
            <GradeTable grades={this.state.grades} />
          </div>
        </div>
      </div> // end of container div
    );
  }
} // end of class App

export default App;
