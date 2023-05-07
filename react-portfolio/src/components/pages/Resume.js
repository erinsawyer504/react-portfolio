import React from 'react';
import {
    Segment,
    Button
  } from 'semantic-ui-react';
  import ResumePDF from '../../assets/erin_sawyer_resume1.pdf'
  
export default function Resume() {
  return (
    <Segment basic>
        <div> 
          <h1>Resume</h1>
          <button class="ui inverted violet button"><a href={ResumePDF} download>Download Resume PDF</a></button>
        </div>
        <div className="ui very padded segment">
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
