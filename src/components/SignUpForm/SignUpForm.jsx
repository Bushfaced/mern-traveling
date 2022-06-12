import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import "./SignUpForm.css"

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <main className="container" id="signUpForm">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <div className='mb-3'>
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange} required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className='mb-3'>
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div className='mb-3'>
            <label for="exampleInputPassword1" classNAme="form-label">Confirm</label>
            <input type="password" name="confirm" className="form-control" value={this.state.confirm} onChange={this.handleChange} required />
          </div>
            <button type="submit" className="btn btn-primary" disabled={disable}>SIGN UP</button>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </main>
    );
  }
}