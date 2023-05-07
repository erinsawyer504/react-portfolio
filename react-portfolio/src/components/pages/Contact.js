import React, { useState } from 'react';
import {
    Segment,
    Form,
    Message,
    Grid,
    Icon
  } from 'semantic-ui-react';
  
  //TODO consider including your email address and phone number on the Contact page.

  export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
  
    const handleEmailChange = (event) => {
      const emailRegex = /\S+@\S+\.\S+/;
      const validEmail = emailRegex.test(event.target.value);
      setEmailError(!validEmail);
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!emailError && name && email && message) {
        // handle form submission
      }
    };
  
    return (
      <div style={{ backgroundColor: '#2d283e'}}>
      <Segment basic>
        <div className="ui very padded segment" style={{ backgroundColor: '#d1d7e0'}}>
          <h2>Contact Me</h2>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column className="six wide column">
                <Form onSubmit={handleSubmit}>
                  <Form.Input
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                  />
                  <Form.Input
                    label="Email"
                    placeholder="Enter your email address"
                    value={email}
                    required
                    error={emailError}
                    onChange={handleEmailChange}
                  />
                  {emailError && <Message error content="Please enter a valid email address" />}
                  <Form.TextArea
                    label="Message"
                    placeholder="Enter your message"
                    value={message}
                    required
                    onChange={(event) => setMessage(event.target.value)}
                  />
                  <Form.Button primary>Submit</Form.Button>
                </Form>
              </Grid.Column>
              <Grid.Column className="ten wide column">
                <p>
                  <Icon name="text telephone" size="big"></Icon>
                </p>
                <p>
                  <Icon name="mail" size="big"></Icon>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
      </div>
    );
  }