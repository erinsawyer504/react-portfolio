import React from 'react';
import { Message, Segment, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Footer() {
  return (
    <Segment>
      <Container>
        <div className="page-footer" id="footer">
          <Message>
            <div className="ui icon message">
              <i className="github square icon"></i>
              <div className="content">
                <div className="header">
                  Have you heard about our mailing list?
                </div>
                <p>Get the best news in your e-mail every day.</p>
              </div>
            </div>
            <div className="ui icon message">
              <i className="linkedin icon"></i>
              <div className="content">
                <div className="header">
                  Have you heard about our mailing list?
                </div>
                <p>Get the best news in your e-mail every day.</p>
              </div>
            </div>
          </Message>
          {/* include links to github & linkedin */}
        </div>
      </Container>
    </Segment>
  );
}

export default Footer;
