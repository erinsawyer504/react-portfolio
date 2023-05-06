import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function About() {
  return (
    <Segment>
      <div id="about-container">
        <p className="name">Erin Sawyer</p>
        <p className="job">Full Stack Web Developer</p>
        <h2 className="about">About Me</h2>
        <img className="ui middle aligned medium circular spaced image" src="https://avatars.githubusercontent.com/u/117681165?s=400&u=07ceb9abff9f9fbc0292cec20e0b84e1e6012e65&v=4" alt="Erin Sawyer's profile picture" />
        <span>
        Intro paragraph about me Additional information about me
        </span>
      </div>
    </Segment>
  );
}
