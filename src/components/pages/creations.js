import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Creations extends Component {
    render() {
        return (
            <div class="content-wrapper">

                <h1 class="landing-title">Hi, I'm Vytautas!</h1>

                <h2 class="landing-desc">Front-end web developer, video enthusiast/creator, nerd.</h2>

                <h2 class="title">What have I created?</h2>

                <a href="#scroll">
                    <div class="scroll-btn">
                        <span>SEE PROJECTS</span>
                    </div>
                </a>

                <ScrollableAnchor id={'scroll'}>
                    <h2 class="sub-title">Some of my projects</h2>
                </ScrollableAnchor>

                <div class="projectlist">
                    <div class="project">
                        <h2 class="project-title">Goldsmith Apel - University Project</h2>
                        <img src={require('./images/apel.png')} alt="Apel Goldsmith website" class="project-image" />
                        <div class="project-body">
                            <p>This fully responsive website dynamically loads content from WordPress in the form of a headless CMS. The
                                current live prototype may have malfunctions,
                                because access to the CMS is no longer available to me.
                            </p>
                            <a href="http://des-iis.ucn.dk/mmdi0917/1067667/Guldsmed_Apel/" target="_blank">
                                <div class="project-btn">
                                    <span>VIEW PROTOTYPE</span>
                                </div>
                            </a>
                        </div>
                        <div class="project-footer">
                            <h3>Note: this project is a prototype created for educational purposes and has never been
                                published.</h3>
                        </div>
                    </div>

                    <div class="project">
                        <h2 class="project-title">Aalborg Chocolate - University Project</h2>
                        <img src={require('./images/chokolade.png')} alt="Aalborg Chokolade website" class="project-image" />
                        <div class="project-body">
                            <p>This is a demonstrational Christmas-special microsite made for Aalborg Chokoladen. The task was to create
                            a microsite to represent the companies visual identity - not to act as a webshop. This prototype is
                            not responsive and may lack functionality due to constraints during development.
                                </p>
                            <a href="http://des-iis.ucn.dk/mmdi0917/1067654/Responsive%20Web/Front_About/index.html" target="_blank">
                                <div class="project-btn">
                                    <span>VIEW PROTOTYPE</span>
                                </div>
                            </a>
                        </div>
                        <div class="project-footer">
                            <h3>Note: this project is a prototype created for educational purposes and has never been
                                    published.</h3>
                        </div>
                    </div>

                    <div class="project">
                        <h2 class="project-title">Aalborg Carnival - University Project</h2>
                        <img src={require('./images/karneval.png')} alt="Aalborg Carnival web-app" class="project-image" />
                        <div class="project-body">
                            <p>This is my first attempt to create an interacvite web applicaiton. The content of the site is only visible when the browser window
                            is sized down to mobile resolution, due to the limitations I had at the time of developing it. The functionality is very limited as this
                            product was only made to act as an interactive mockup.
                            </p>
                            <a href="http://des-iis.ucn.dk/mmdi0917/1067818/AalborgCarnival/" target="_blank">
                                <div class="project-btn">
                                    <span>VIEW PROTOTYPE</span>
                                </div>
                            </a>
                        </div>
                        <div class="project-footer">
                            <h3>Content is visible ONLY if viewed on a mobile-sized browser window.</h3>
                            <h3>Note: this project is a prototype created for educational purposes and has never been
                                published.</h3>
                        </div>
                    </div>
                    <div class="project-footer">
                        <h3>More projects to come! I am still studying and developing projects for companies almost every month.</h3>
                    </div>
                </div>
            </div>

        );
    }
}

export default Creations;
