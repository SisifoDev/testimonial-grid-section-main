import React from "react";
import styled from "styled-components";

export default function Card({ title, quote, author, graduate, image }) {
  return (
    <CardWrapper>
      <Avatar>
        <img src={image} alt="" />
        <AvatarText>
          <Author>{author}</Author>
          {graduate && <p>Verified Graduate</p>}
        </AvatarText>
      </Avatar>
      <Title>{title}</Title>
      <Paragraph>{quote}</Paragraph>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  padding: 30px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  color: var(--White);

  &:nth-child(1) {
    grid-column: span 2;
    background-color: var(--moderateViolet);
    background-image: url(img/bg-pattern-quotation.svg);
    background-size: 132px;
    background-position: 80% 0%;
    background-repeat: no-repeat;
  }

  &:nth-child(2) {
    grid-column-end: span 1;
    background-color: var(--veryDarkGrayishBlue);
    @media (max-width: 1439px) {
      grid-column: 2;
      grid-row: 3 / span 2;
    }
  }

  &:nth-child(3) {
    grid-column: 4;
    grid-row: 1 / span 2;
    background-color: var(--White);
    color: var(--veryDarkGrayishBlue);
    @media (max-width: 1439px) {
      grid-column: 3;
      grid-row: 1 / span 2;
    }
    @media (max-width: 575.98px) {
      order: 4;
    }
  }

  &:nth-child(4) {
    grid-column: 1 / span 1;
    grid-row: 2;
    background-color: var(--White);
    color: var(--veryDarkGrayishBlue);
    @media (max-width: 1439px) {
      grid-column: 1;
      grid-row: 3;
    }
  }

  &:nth-child(5) {
    grid-column-end: span 2;
    background-color: var(--VeryDarkBlackishBlue);
    color: var(--lightGrayishBlue);
    @media (max-width: 1439px) {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
  }
`;

const Author = styled.strong``;

const Avatar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid hsla(263, 55%, 52%, 0.5);
  }
`;

const AvatarText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p {
    color: currentColor;
    opacity: 0.5;
  }
`;

const Paragraph = styled.p`
  color: currentColor;
  opacity: 0.7;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  margin: 20px 0;
`;
