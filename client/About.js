import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div id='my-portrait'>
        <img src='P1020274.JPG'/>
      </div>
      <div className="column-end">
        <div id="intro">
          <p>Born in Singapore, I have grown up loving physics, mathematics, and then fallen in love with programming later on in life.
            To me, they are the manifestation of elegance of the universe; they are unambiguous yet complex, logical yet magical; they
            are rules inevitably made or explained by man and are of instructional nature, yet with them, men are capable of infinite creations.
          </p>
          <p>
            Learning about programming has lead me to a new path of possibilites where I can start using skills picked up on my way learning about the world
            through physics and mathematics to create. I am working towards becoming a software developer to realize many tiny dreams of mine.
          </p>
        </div>
        <div id="connect">
          <a href="https://github.com/cherylngql"><img src="github_icon.png" className="connect-icon"/></a>
          <a href="https://www.linkedin.com/in/cheryl-ng-ql/"><img src="linkedin.svg" className="connect-icon-small"/></a>
          <a href="https://drive.google.com/uc?export=download&id=1jrYsfI3nILR5wKLG-kB8NxMskTyR5ckI"><img src="resume.png" className="connect-icon"/></a>
        </div>
      </div>
    </div>
  )
}

export default About