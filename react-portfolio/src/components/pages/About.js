import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function About() {
  return (
    <Segment>
      <div className="ui very padded segment">
        <h2 className="about">About Me</h2>
        <img className="ui middle aligned small circular spaced image" src="https://avatars.githubusercontent.com/u/117681165?s=400&u=07ceb9abff9f9fbc0292cec20e0b84e1e6012e65&v=4" alt="Erin Sawyer's profile picture" />
        <span>
        I am a former educator and high school teacher who know teaches and guides adults.  I've always had an interest in technology and wanted to learn more about coding and <br />
        front end development
        </span>
      </div>
    </Segment>
  );
}
