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
  padding: 40px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;

  color: var(--White);

  &:nth-child(1) {
    grid-column-end: span 2;
    grid-row-end: span 2;
    background-color: var(--moderateViolet);
    background-image: url(img/bg-pattern-quotation.svg);
    background-size: 132px;
    background-position: 80% 0%;
    background-repeat: no-repeat;
  }

  &:nth-child(2) {
    grid-column-end: span 1;
    background-color: var(--veryDarkGrayishBlue);
  }

  &:nth-child(3) {
    grid-row-end: span 4;
    grid-column-end: span 1;
    background-color: var(--White);
    color: var(--veryDarkGrayishBlue);

    @media (max-width: 575.98px) {
      order: 4;
    }
  }

  &:nth-child(4) {
    grid-column-start: span 1;
    grid-row-start: 3;
    background-color: var(--White);
    color: var(--veryDarkGrayishBlue);
  }

  &:nth-child(5) {
    grid-column-end: span 2;
    background-color: var(--VeryDarkBlackishBlue);
    color: var(--lightGrayishBlue);
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

const Title = styled.h3`
  font-size: 1.3rem;
  margin: 20px 0;
`;
