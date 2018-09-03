import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div id="contact">
      <div className="extrashort">
        <h3>I am interested in whatever you have to say</h3>
      </div>
      <form>
        <div className="form-element">
          <label>Email</label>
          <input name="email"/>
        </div>
        <div className="form-element">
          <textarea/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact