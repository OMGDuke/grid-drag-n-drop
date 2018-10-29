import styled from 'styled-components';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <FooterContainer className="footer">
    <div className="footer-inner">
      <span>© {currentYear} Made by Your Name here</span>
      <div className="links">
        <a
          href="https://www.example.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          > Link 1
        </a>
        <a
          href="https://www.example.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          > Link 2
        </a>
        <a
          href="https://www.example.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          > Link 3
        </a>
      </div>
    </div>
  </FooterContainer>
);

const FooterContainer = styled.section`
  @media print {
    display: none;
  }
  background-image: ${props => props.theme.gradient};
  color: ${props => props.theme.accentText};
  padding: 33px 0;
  .footer-inner {
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  a {
    margin: 0 15px;
    text-decoration: none;
    color: ${props => props.theme.accentText};
  }
  @media screen and (max-width: 1000px) {
    .footer-inner {
      flex-direction: column-reverse;
      width: 90%;
    }
    .links {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    a {
      margin: 7px 0;
    }
  }
`;

export default Footer;
