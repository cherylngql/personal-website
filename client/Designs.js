import React, {Component} from 'react'

class Designs extends Component {
  constructor(props) {
    super(props)
    this.onLoad = this.onLoad.bind(this)
  }
  onLoad(event) {
    event.target.style.display = "block"
    event.target.nextElementSibling.style.display = "none"
  }
  render() {
    return (
      <div id="designs">
        <div className="singleDesign">
          <img onLoad={this.onLoad} className="design" id="lovebook" src="lovebook.jpg"/>
          <div className="loading">loading fabulous artwork...</div>
        </div>
        <div className="singleDesign">
          <img onLoad={this.onLoad} className="design" id="intempo" src="INTEMPO.jpg"/>
          <div className="loading">loading extraordinary design...</div>
        </div>
        <div className="singleDesign">
          <img onLoad={this.onLoad} className="design" id="dacapo" src="DACAPO.jpg"/>
          <div className="loading">loading breath-taking piece...</div>
        </div>
        <div className="singleDesign">
          <img onLoad={this.onLoad} className="design" id="emcc" src="EMCC.jpg"/>
          <div className="loading">loading mind-blowing creation...</div>
        </div>
      </div>
    )
  }
}

export default Designs