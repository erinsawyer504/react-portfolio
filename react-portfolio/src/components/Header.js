import React from 'react'; 
import {
    Segment
  } from 'semantic-ui-react';


export default function Header() {
    return(
    <div style={{ backgroundColor: '#2d283e'}}>
        <Segment basic>
            <section className="header">
                <div className="ui very padded basic segment">
                    <h1 style={{ color: '#802bb1'}}>
                        Erin Sawyer
                    </h1>
                </div>
            </section> 
        </Segment>
    </div>  
)}
