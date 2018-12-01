import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
// import "./app.scss";


const AppWrapper = styled.div`
text-align: center;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;

  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  `;

const Link = styled.a`
  color: #61dafb;
  `;

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Header>
      </AppWrapper>
    );
  }
}
