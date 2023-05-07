import React from 'react';
import { Segment, Icon, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#2d283e'}}>
    <Segment basic>
      <div className="ui very padded center aligned basic segment">
        <a className="ui circular large black github icon button" href="https://github.com/erinsawyer504" target="_blank" rel="noopener noreferrer" >
          <i className="github icon"></i>
        </a>
        <a className="ui circular large linkedin icon button" href="https://www.linkedin.com/in/erin-sawyer-a5476762/" target="_blank" rel="noopener noreferrer" >
          <i className="linkedin icon"></i>
        </a>
        <a className="ui circular large orange stack overflow icon button" href="https://stackoverflow.com/users/21831081/sihaya504" target="_blank" rel="noopener noreferrer" >
          <i className="stack overflow icon"></i>
        </a>
      </div>
      <style>{`
        .ui.circular.icon.button:not(:last-child) {
          margin-right: 25px;
        }
      `}</style>
    </Segment>
    </div>
  );
}

