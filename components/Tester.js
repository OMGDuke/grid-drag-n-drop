import styled from 'styled-components';

const Tester = ({ text }) => <TesterContainer>{text}</TesterContainer>;

const TesterContainer = styled.div`
  background: ${({ theme }) => theme.accentColorAlt};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Tester;
