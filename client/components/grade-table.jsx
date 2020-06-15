
import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  render() {
    if (this.props.grades.length > 0) {
      return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="border-top-0" scope="col">Name</th>
              <th className="border-top-0" scope="col">Course</th>
              <th className="border-top-0" scope="col">Grade</th>
              <th className="border-top-0 text-right" scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.grades.map(grade => {
                return <Grade deleteGrade={this.props.deleteGrade} key={grade.id} grade={grade} />;
              })
            }
          </tbody>
        </table>
      );
    } else {
      return (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="border-top-0" scope="col">Name</th>
                <th className="border-top-0" scope="col">Course</th>
                <th className="border-top-0" scope="col">Grade</th>
                <th className="border-top-0 text-right" scope="col">Operations</th>
              </tr>
            </thead>
          </table>
          <h4>No Grades Recorded</h4>
        </div>
      );
    }
  }
}
