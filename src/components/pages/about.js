import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';

class About extends Component {
  render() {
    return (
      <div className="content-wrapper">

        <h1 class="about-title">About me</h1>

        <p class="about-text">I'm a second year Multimedia Design student at UCN Technology. </p>
        <p class="about-text">My real name is Vytautas, but my colleagues refer to me as Sky.</p>
        <p class="about-text">
          My main focus is
          front-end web development, but I also have a passion for working with video.
          Current goal - find a study job to work besides my studies.
        </p>

        <a href="#scroll">
          <div class="scroll-btn">
            <span>SEE SKILLS</span>
          </div>
        </a>

        <ScrollableAnchor id={'scroll'}>
          <h2 class="sub-title">Skills</h2>
        </ScrollableAnchor>

        <div class="skillset">
          <ul>
            <li><strong> HTML 5 and CSS 3 </strong> - good understanding of SEO principles and cross-browser compatibility, responsive and adaptive website design.</li>
            <li><strong>JavaScript</strong> - basic knowledge about RESTful API's, as well as usage of vue.js.</li>
            <li><strong>Node</strong> - basic knowledge of database planning, creation and realization using Node.js.</li>
            <li><strong>jQuery, Bootstrap</strong>: experience with jQuery 3 for back-end implementation and Bootstrap 4 for front-end design.</li>
            <li><strong>UX/UI</strong> - ability to conduct user research and tests, knowledge of key theories and methods for user-friendly design.</li>
            <li><strong>Problem solving</strong> - year-long experience of coming up with solutions to various design problems from multiple companies.</li>
            <li><strong>WordPress CMS</strong> - experience with creating WordPress websites, as well as working with it's API.</li>
            <li><strong>Adobe Photoshop, Illustrator</strong> - ability to create wireframes and mockups, as well as transfer them into HTML and CSS.</li>
            <li><strong>MAGIX Vegas Pro</strong> - experience with advanced video editing and plugin usage.</li>
          </ul>
        </div>

        <h2 class="sub-title">Interested? Contact me <Link to="/Contact">here</Link>!</h2>
      </div>
    );
  }
}

export default About;