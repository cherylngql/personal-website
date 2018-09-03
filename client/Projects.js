import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {storageRef} from './firebase'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      spacecraftUrl: 'loadingcat.gif',
      shubieUrl: 'loadingcat.gif',
      cormorantUrl: 'loadingcat.gif'
    }
  }


  async componentDidMount() {
    try {
      const spacecraftUrl = await storageRef.child('spacecraft.gif').getDownloadURL()
      const shubieUrl = await storageRef.child('shubie.gif').getDownloadURL()
      const cormorantUrl = await storageRef.child('cormorant.gif').getDownloadURL()
      this.setState({
        spacecraftUrl,
        shubieUrl,
        cormorantUrl
      })
    } catch (err) {
      console.log('there is an error', err)
    }
  }
  render() {
    return (
      <div id="projects">
        <div className="singleProject">
          <Link to="https://www.playspacecraft.com"><img className="project" id="spacecraft" src={this.state.spacecraftUrl}/></Link>
          <div className="description">
            <h1>SpaceCraft<Link to="https://github.com/Space-Crew/SpaceCraft"><img className="github-icon" src="github_icon.png"/></Link></h1>
            <p>Online real-time multiplayer 3D block building game</p>
          </div>
        </div>
        <div className="singleProject">
          <Link to="https://github.com/cherylngql/Shubie/blob/master/README.md"><img className="project" id="shubie" src={this.state.shubieUrl}/></Link>
          <div className="description">
            <h1>Shubie<Link to="https://github.com/cherylngql/Shubie"><img className="github-icon" src="github_icon.png"/></Link></h1>
            <p>An interactive dog on your desktop</p>
          </div>
        </div>
        <div className="singleProject">
          <Link to="https://supermodel-matrices.herokuapp.com/"><img className="project" id="cormorant" src={this.state.cormorantUrl}/></Link>
          <div className="description">
            <h1>Cormorant<Link to="https://github.com/Supermodel-Matrices/GraceShopper"><img className="github-icon" src="github_icon.png"/></Link></h1>
            <p>An e-commerce site for home-decor</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects