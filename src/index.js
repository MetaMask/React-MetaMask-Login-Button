import React, { Component } from "react";
import { Fragment } from "react";
import { MetaMaskButton } from "rimble-ui";
import Web3 from "web3";
import MyComponent from "./MyComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
var detect = require("detect-browser").detect;

var isMobile;
var path = window.location.href;

class MetaMaskLoginButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.network = this.network.bind(this);
    this.mount = this.mount.bind(this);

    this.init = this.init.bind(this);

    this.state = {
      show: false,
      install: false,
      isMetaMask: false,
      isLoginMetaMask: false,
      isDesiredNetwork: false,
      isLogin: false
    };
  }
  componentWillMount() {
    if (typeof web3 !== "undefined") {
      this.state.install = false;
      window.ethereum.on("networkChanged", accounts => {
        if (accounts === "3") {
          this.setState({
            isLogin: true,
            isDesiredNetwork: false,
            isMetaMask: false,
            isLoginMetaMask: false
          });
        } else {
          this.setState({
            isLogin: false,
            isDesiredNetwork: true,
            isMetaMask: false,
            isLoginMetaMask: false
          });
        }
      });
    } else {
      this.state.install = true;
    }
  }

  mount() {
    if (typeof web3 !== "undefined") {
      this.setState({ isMetaMask: false });
      this.init();
    } else {
      const browser = detect();

      isMobile = !!detectMobile();

      function detectMobile() {
        return (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        );
      }
      if (!isMobile) {
        window.open("http://fwd.metamask.io/" + "?" + path);

        switch (browser.name) {
          case "firefox":
            window.open(
              "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",
              "_blank"
            );

            break;

          case "chrome":
            window.open(
              "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
              "_blank"
            );
            break;

          case "opera":
            window.open(
              "https://addons.opera.com/en/extensions/details/metamask/",
              "_blank"
            );

            break;
        }
      }

      this.setState({ isMetaMask: true });
    }
  }

  async init() {
    try {
      const accounts = await window.ethereum.enable();
      this.setState({
        isDesiredNetwork: true,
        isMetaMask: false
      });
      this.network();
    } catch (error) {
      this.setState({ isLoginMetaMask: true, isMetaMask: false });
    }
    window.ethereum.on("accountsChanged", accounts => {
      if (accounts.length === 1) {
        this.setState({
          isLoginMetaMask: true,
          isMetaMask: false,
          isDesiredNetwork: false,
          isLogin: false
        });
        this.init();
      } else {
        this.setState({
          isLoginMetaMask: false,
          isMetaMask: false,
          isDesiredNetwork: false,
          isLogin: true
        });
      }
    });
  }

  network() {
    // If a web3 instance is already provided by Meta Mask.
    if (window.ethereum.networkVersion === "3") {
      this.setState({ isLogin: true });
    } else {
      window.ethereum.on("networkChanged", accounts => {
        if (accounts === "3") {
          this.setState({
            isLogin: true,
            isDesiredNetwork: false,
            isMetaMask: false,
            isLoginMetaMask: false
          });
        } else {
          this.setState({
            isLogin: false,
            isDesiredNetwork: true,
            isMetaMask: false,
            isLoginMetaMask: false
          });
        }
      });
    }
  }

  handleClose() {
    window.location.reload();
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    this.mount();
  }

  render() {
    let content;
    if (this.state.isMetaMask) {
      content = <MyComponent tag="a" />;
    }
    if (this.state.isLoginMetaMask) {
      content = <MyComponent tag="b" />;
    }
    if (this.state.isDesiredNetwork) {
      content = <MyComponent tag="c" />;
    }
    if (this.state.isLogin) {
      content = <MyComponent tag="d" />;
    }
    if (isMobile) {
      content = <Fragment>Mobile coming soon!</Fragment>;
    }

    return (
      <div>
        <MetaMaskButton mb={3} onClick={this.handleShow}>
          {this.state.install ? "Install MetaMask" : "Connect with MetaMask"}
        </MetaMaskButton>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Lets Start!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{content}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Done!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MetaMaskLoginButton;
