import React, {Component} from 'react'
import {storageRef} from './firebase'

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="projects">
        <div className="singleProject">
          <a href="https://www.playspacecraft.com"><img className="project" id="spacecraft" src="spacecraft.gif"/></a>
          <div className="description">
            <h1>SpaceCraft<a href="https://github.com/Space-Crew/SpaceCraft"><img className="github-icon" src="github_icon.png"/></a></h1>
            <p>Online real-time multiplayer 3D block building game</p>
          </div>
        </div>
        <div className="singleProject">
          <a href="https://github.com/cherylngql/Shubie/blob/master/README.md"><img className="project" id="shubie" src="shubie.gif"/></a>
          <div className="description">
            <h1>Shubie<a href="https://github.com/cherylngql/Shubie"><img className="github-icon" src="github_icon.png"/></a></h1>
            <p>An interactive dog on your desktop</p>
          </div>
        </div>
        <div className="singleProject">
          <a href="https://supermodel-matrices.herokuapp.com/"><img className="project" id="cormorant" src="cormorant.gif"/></a>
          <div className="description">
            <h1>Cormorant<a href="https://github.com/Supermodel-Matrices/GraceShopper"><img className="github-icon" src="github_icon.png"/></a></h1>
            <p>An e-commerce site for home-decor</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects