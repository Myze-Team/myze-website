import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="d-flex p-2 justify-content-center col-md-12">
            <div className="col-lg-6 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Register</h4>
              </div>
              <div className="card-body">
              Test
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
