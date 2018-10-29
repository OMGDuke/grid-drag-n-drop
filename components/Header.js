import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = err => {
  console.log('onRouteChangeError Triggered', err);
};

const Header = () => (
  <HeaderContainer className="header">
    <HeaderInner>
      <div className="header-block">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/">
          <div className="text-block">
            <h1>Drag and Drop</h1>
            <h2>Proof of concept</h2>
          </div>
        </Link>
      </div>
    </HeaderInner>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  @media print {
    display: none;
  }
  box-shadow: ${props => props.theme.boxShadow};
  align-content: center;
  display: flex;
  position: sticky;
  top: 0;
  background: ${props => props.theme.bg};
  z-index: 1000;

  img {
    width: 114px;
    height: 114px;
    cursor: pointer;
  }

  .header-block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .text-block {
    display: flex;
    flex-direction: column-reverse;
    cursor: pointer;
    transition-duration: 0.4s;
  }
  .text-block:hover {
    transform: rotate(2deg) scale(1.1);
    transition-duration: 0.2s;
  }

  h1 {
    margin: 0px 0px 14px 14px;
  }

  h2 {
    margin: 14px 0px 5px 14px;
    background: ${props => props.theme.gradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  @media screen and (max-width: 1000px) {
    .header-block {
      justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      height: auto;
      width: 50px;
    }
  }
`;

const Logo = styled.div`
  width: 60px;
  border-radius: 30px;
  height: 60px;
  background: ${props => props.theme.gradient};
`;

const HeaderInner = styled.div`
  width: 1000px;
  margin: auto;
  display: block;
`;

export default Header;
