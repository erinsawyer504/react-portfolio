import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';

export default function About() {
  return (
    <div style={{ backgroundColor: '#2d283e'}}>
    <Segment basic>
      <div className="ui very padded segment" style={{ backgroundColor: '#d1d7e0'}}>
        <h2 className="about">About Me</h2>
        <Grid columns={3} stackable>
          <Grid.Row>
            <Grid.Column className="two wide column"> 
              <Image className="ui middle aligned small circular spaced image" src="https://avatars.githubusercontent.com/u/117681165?s=400&u=07ceb9abff9f9fbc0292cec20e0b84e1e6012e65&v=4" alt="Erin Sawyer's profile picture" />
            </Grid.Column>
            <Grid.Column className="eight wide column">
            <p>
            I am a former educator, IT help desk agent, technical trainer, and currently a instructional designer turned beginner coding enthusiast. I enjoy learning new coding languages, 
            graphic design, and of course all things cat related.</p>
            <p>Currently, I am learning full stack development through the UNC Chapel Hill boot camp.
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Segment>
    </div>
  );
}
