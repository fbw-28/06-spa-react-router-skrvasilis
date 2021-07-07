import React from "react";
import Thanks from "./Thanks";


export default class Contact extends React.Component {

    state ={
        name:'',
        email:'',
        text:''
    }
   
   validateForm = (e) => {
    e.preventDefault();
    console.log(this.state.name)
if (this.state.name!=='' && this.state.email !== '' && this.state.text!== '') {
    this.props.history.push('/thanks')
  }
  };

  render(){

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={this.validateForm}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input-small"
            onChange={(e)=>this.setState({
              name: e.target.value
            })}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input-small"
            onChange={(e)=>this.setState({
              email: e.target.value
            })}
          />
        </label>
        <label>
          <input
            type="text"
            name="message"
            placeholder="Your message"
            className="input-big"
            minLength="10"
            maxLength="160"
            onChange={(e)=>this.setState({
              text: e.target.value
            })}
          />
        </label>
          <label>
            <input
              type="submit"
              name="submit"
              value="Send Message"
              className="btn"
            />
          </label>
      </form>
    </div>
  );
}
}
