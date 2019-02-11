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
