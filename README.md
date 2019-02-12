# React-MetaMask-Login-Button
![image](https://user-images.githubusercontent.com/35871990/52589566-1dbeb200-2e0d-11e9-8dfe-f9aebfcedb2d.png)
===
![image](https://user-images.githubusercontent.com/35871990/52588870-8147e000-2e0b-11e9-8f5e-903fd83aec15.png)
===
This button can be used  to:
- Install MetaMask 
- Log in to MetaMak
- Connect to the right network
- Log in to your app

## Installation
```bash
$ npm install react-metamask-login-button
or
$ yarn add react-metamask-login-button
```

## Usage 
```js
import React,{Component} from 'react';
import MetaMaskLoginButton from 'react-metamask-login-button';
 
class App extends Component {
  constructor() {
    super();
 }
  render() {
    return (
      <div>
        <MetaMaskLoginButton />
      </div>
    );
  }
}
 
ReactDOM.render(<App />, appElement);
```
## Optional Modifications

Optional changes to the views can be made for each component 

**Example**
===

![image](https://user-images.githubusercontent.com/35871990/52607678-1e733a80-2e45-11e9-871f-816a0192e91d.png)


Can be changed to 

![image](https://user-images.githubusercontent.com/35871990/52656863-44402400-2ec5-11e9-8302-7fea6883fe07.png)


by changing the Login.js component 

```js
import React, { Component } from "react";
import  {Form,Button} from "react-bootstrap";
import Web3 from "web3";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
```

