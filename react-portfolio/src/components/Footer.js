import React from 'react';
import { Message, Segment, Container, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//TODO need to add stack over flow profile https://stackoverflow.com/users/21831081/sihaya504

function Footer() {
  return (
    <Segment>
      <Container>
        <Message>
          <List divided horizontal size="medium">
            <List.Item>
              <div className="ui icon message">
                <i className="github square icon"></i>
                <List.Content>
                  <List.Header>GitHub</List.Header>
                </List.Content>
              </div>
            </List.Item>
            <List.Item>
              <div className="ui icon message">
                <i className="linkedin icon"></i>
                <List.Content>
                  <List.Header>LinkedIn</List.Header>
                </List.Content>
              </div>
            </List.Item>
          </List>
        </Message>
      </Container>
    </Segment>
  );
}

export default Footer;
