import React, {Component} from 'react'
import {db} from './firebase'

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      content: '',
      success: false,
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      await db.ref('/').push(
        {
          email: this.state.email,
          content: this.state.content
        }
      );
      this.setState({
        email: '',
        content: '',
        success: true
      });
      setTimeout(
        () => {
          this.setState({success: false});
          this.props.history.push('/');
        },
        2000
      )
    } catch (err) {
      this.setState({
        errorMessage: 'Sorry, there is an error, please try again later.'
      })
    }
  }

  render() {
    return (
      <div id="contact">
        <div id="subcontact">
          <h3>I am interested in whatever you have to say. Please leave me a note!</h3>
          <div className="extrashort"/>
          {
            this.state.success ?
            <p>Thank you for sharing!</p> :
            <form onSubmit={this.handleSubmit}>
              <div className="form-element">
                <label>Email</label>
                <input name="email" value={this.state.email} onChange={this.handleChange}/>
              </div>
              <div className="form-element">
                <textarea name="content" value={this.state.content} onChange={this.handleChange}/>
              </div>
              <button type="submit">Submit</button>
            </form>
          }
          {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : null}
        </div>
      </div>
    )
  }
}

export default Contact