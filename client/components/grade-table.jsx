
import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.grades.map(grade => {
              return <Grade key={grade.id} grade={grade} />;
            })
          }
        </tbody>
      </table>
    );
  }
}
