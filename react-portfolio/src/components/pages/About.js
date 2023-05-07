import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';

export default function About() {
  return (
    <Segment basic>
      <div className="ui very padded segment">
        <h2 className="about">About Me</h2>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column className="two wide column"> 
              <Image className="ui middle aligned small circular spaced image" src="https://avatars.githubusercontent.com/u/117681165?s=400&u=07ceb9abff9f9fbc0292cec20e0b84e1e6012e65&v=4" alt="Erin Sawyer's profile picture" />
            </Grid.Column>
            <Grid.Column className="fourteen wide column">
            <p>
                I am a former educator and high school teacher who now teaches and guides adults. I've always had an interest in technology and wanted to learn more about coding and front end development.
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Segment>
  );
}
