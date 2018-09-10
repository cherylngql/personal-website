import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

//Your initialization

class NavBar extends Component {
  constructor() {
    super();
    this.state = {expanded: false}
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    // handles hiding navbar menu on mobile
    document.addEventListener("click", event => {
      if (event.target.closest("#nav-group-small")) return;
      document.getElementById('nav-container-small').style.display = 'none';
      document.getElementById('nav-icon').style.display = 'block';
      this.setState({expanded: false})
    });
  }

  handleClick(evt) {
    if (!this.state.expanded) {
      document.getElementById('nav-container-small').style.display = 'flex';
      document.getElementById('nav-icon').style.display = 'none';
      this.setState({expanded: true})
    } else {
      document.getElementById('nav-container-small').style.display = 'none';
      document.getElementById('nav-icon').style.display = 'block';
      this.setState({expanded: false})
    }
  }

  // ??? does not work with componentDidMount/eventListener ???
  // handleMouseLeave(evt) {
  //   if (this.state.expanded) {
  //     document.getElementById('nav-container-small').style.display = 'none';
  //     document.getElementById('nav-icon').style.display = 'block';
  //     this.setState({expanded: false})
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <div id="nav-container">
          <Link to={'/'}><p className="home-link">Cheryl Ng</p><img id="icon" src="icon.png"/></Link>
          <Link className="link" to={'/about'}><p className="nav-link">About Me</p></Link>
          <Link className="link" to={'/projects'}><p className="nav-link">Projects</p></Link>
          <Link className="link" to={'/designs'}><p className="nav-link">Designs</p></Link>
          <Link className="link" to={'/contact'}><p className="nav-link">Contact</p></Link>
        </div>
        <div id="nav-group-small">
          <div id="nav-icon"><img src="menu-icon.png" onClick={this.handleClick}/></div>
          <div id="nav-container-small" onMouseLeave={this.handleMouseLeave}>
            <Link className="link" onClick={this.handleClick} to={'/about'}><p className="nav-link">About Me</p></Link>
            <Link className="link" onClick={this.handleClick} to={'/projects'}><p className="nav-link">Projects</p></Link>
            <Link className="link" onClick={this.handleClick} to={'/designs'}><p className="nav-link">Designs</p></Link>
            <Link className="link" onClick={this.handleClick} to={'/contact'}><p className="nav-link">Contact</p></Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(NavBar)