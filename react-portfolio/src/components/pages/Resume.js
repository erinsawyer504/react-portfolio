import React from 'react';
import {
    Segment
  } from 'semantic-ui-react';
  import ResumePDF from '../../assets/erin_sawyer_resume1.pdf'
  
//TODO need to add downloadable resume
export default function Resume() {
  return (
    <Segment>
        <div>
      <a href={ResumePDF} download>Download PDF</a>
    </div>
    <div>
      <h1>Resume</h1>
      <h2> Front End Proficiencies</h2>
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
                        Framework (Bootstrap, TailwindCss, SemanticUI)
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
                        API's (web, third-party, RESTful, server-side)
                    </li>
                </ul>
    </div>
    </Segment> 
  );
}
