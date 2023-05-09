import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';

export default function About() {
  return (
    <div style={{ backgroundColor: '#2d283e'}}>
      <Segment basic>
        <div className="ui very padded segment" style={{ backgroundColor: '#d1d7e0'}}>
          <h2 className="about">About Me</h2>
          {/*Displaying content in three-column grid layout */}
            <Grid columns={3} stackable>
              <Grid.Row>
                <Grid.Column className="two wide column"> 
                  <Image className="ui middle aligned big spaced image" src="https://github.com/erinsawyer504/react-portfolio/blob/main/react-portfolio/src/assets/esawyer2.jpg?raw=true" alt="Erin Sawyer's profile picture" />
                </Grid.Column>
                <Grid.Column className="eight wide column" verticalAlign="middle">
                  <p>I am a former educator, IT help desk agent, technical trainer, and currently an instructional designer turned beginner coding enthusiast. I enjoy learning new coding languages, 
                  graphic design, and of course all things cat related.</p>
                  <p>Currently, I am learning full stack development through the UNC Chapel Hill boot camp.</p>
                </Grid.Column>
              </Grid.Row>
          </Grid>
        </div>
      </Segment>
    </div>
  );
}
