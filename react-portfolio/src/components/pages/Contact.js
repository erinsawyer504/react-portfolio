import React, { useState } from 'react';
import {
    Segment,
    Form,
    Message,
    Grid,
    Icon,
    Button
  } from 'semantic-ui-react';
  
  export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
  
  // function to validate that the email entered is valid
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
          {/* Assigning 2 columns to the grid */}
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column className="six wide column">
                <Form onSubmit={handleSubmit}>
                  <Form.Input
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    // making the entry required
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
                <h3>Phone Number & Email</h3>
                <p>
                  <Button animated>
                    <Button.Content visible>
                      <Icon name="text telephone" size="big" />
                    </Button.Content>
                    <Button.Content hidden>
                      Call/Text <Icon name='arrow right' /> 
                    </Button.Content>
                  </Button>
                  <a href="tel:864-414-7960">(864) 414-7960</a>
                </p>
                <p>
                  <Button animated>
                    <Button.Content visible>
                      <Icon name="mail" size="big" />
                    </Button.Content>
                    <Button.Content hidden>
                      Email <Icon name='arrow right' />
                    </Button.Content>
                  </Button>
                  <a href="mailto:erinsawyer504@gmail.com">erinsawyer504@gmail.com</a>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
      </div>
    );
  }