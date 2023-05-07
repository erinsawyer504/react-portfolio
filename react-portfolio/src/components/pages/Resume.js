import React from 'react';
import {
    Segment,
    Button,
    Icon
  } from 'semantic-ui-react';
  import ResumePDF from '../../assets/erin_sawyer_resume1.pdf'
  
export default function Resume() {
  return (
    <div style={{ backgroundColor: '#2d283e'}}>
    <Segment basic>
    <div className="ui very padded segment" style={{ backgroundColor: '#d1d7e0'}}>
        <h1>Resume</h1>
            <Button animated="vertical">
                <Button.Content hidden><a href={ResumePDF} download>Download PDF</a></Button.Content>
                <Button.Content visible>
                    <a href={ResumePDF} download>
                        <Icon name="file pdf" bordered inverted color="purple" size="large">
                        </Icon>
                    </a>
                </Button.Content>
            </Button>

            <h2>Front End Proficiencies</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework (Bootstrap, TailwindCSS, SemanticUI)
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
        
            <h2>Back End Proficiencies</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        APIs (web, third-party, RESTful, server-side)
                    </li>
                </ul>
        </div>
    </Segment> 
    </div>
  );
}
