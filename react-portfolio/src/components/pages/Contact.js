import React, { useState } from 'react';
import {
    Segment,
    Form,
    Message
  } from 'semantic-ui-react';
  

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
      <Segment>
      <div className="contact-container">
        <h2>Contact</h2>
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
      </div>
      </Segment>
    );
  }