import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  } // end of constructor code block

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.props.addNewGrade(
      {
        name: this.state.name,
        course: this.state.course,
        grade: Number(this.state.grade)
      } // end of object
    ); // end of addNewGrade argument list
    event.preventDefault();
    this.handleReset();
  } // end of handleSubmit code block

  handleReset(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className="col" id="form-container"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-university"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            name="course"
            id="course"
            value={this.state.course}
            onChange={this.handleChange} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-graduation-cap"></i>
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Grade"
            name="grade"
            id="grade"
            value={this.state.grade}
            onChange={this.handleChange} />
        </div>
        <div className="button-container text-right">
          <button type="submit" className="btn btn-success btn-lg" id="add-button">Add</button>
          <button type="reset" className="btn btn-danger btn-outline-secondary btn-lg" id="cancel-button">Cancel</button>
        </div>
      </form>
    );
  }
} // end of class GradeForm
