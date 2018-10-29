import React from 'react';
import styled from 'styled-components';

export default class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <GridContainer>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
          <GridItem>Hello</GridItem>
        </GridContainer>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  border: 1px solid blue;
  width: 90vw;
  height: 100%;
  margin: auto auto;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const GridItem = styled.div`
  background-color: #80cbc4;
  border: 1px solid #fff;
  height: calc(90vw / 5);
  width: 100%;
`;
