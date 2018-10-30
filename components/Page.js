import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const theme = {
  text: '#393939',
  accentText: '#FFF',
  bg: '#FFF',
  accentColor: '#845EC2',
  accentColorAlt: '#36C486',
  maxWidth: '1000px',
  gradient: 'linear-gradient(90deg, #845EC2 0%, #36C486 100%)',
  facebook: '#3b5998',
  twitter: '#00acee',
  line: '#25af00',
  boxShadow: '0px 3px 3px 0px rgba(31, 20, 17, 0.1)',
  infoBg: '#f4f4f4',
};

const StyledPage = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
`;

const Inner = styled.div`
  /* max-width: ${props => props.theme.maxWidth}; */
  padding: 2rem 0rem;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  @import "~react-grid-layout/css/styles.css";
  @import "~react-resizable/css/styles.css";

  html {
    box-sizing: border-box;
    font-size: 10px;
    background-color: ${theme.bg};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: 'ヒラギノ角ゴ Pro W3', 'Poppins', 'helvetica', sans-serif;
    color: ${theme.text};
    -webkit-font-smoothing: antialiased;
    font-weight: normal;
    font-style: normal;
  }
  h1 {
    font-size: 2rem;
    font-weight: normal;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: normal;
  }
  h3 {
    font-size: 1.7rem;
    font-weight: normal;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: normal;
  }
  a {
    text-decoration: none;
    color: ${theme.text};
  }
  a:hover {
   color: ${theme.accentColor};
  }
`;

export default class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}
