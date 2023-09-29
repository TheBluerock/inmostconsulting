import React from "react";
import styled from "@emotion/styled";

const FooterBox = ({ title, description, icon }) => (
  <BoxContainer>
    <BoxInnerWrapper>
      <BoxIconWrapper>{icon}</BoxIconWrapper>
    </BoxInnerWrapper>
    <BoxInnerWrapper>
      <BoxTitle>{title}</BoxTitle>
      <BoxDescription>{description}</BoxDescription>
    </BoxInnerWrapper>
  </BoxContainer>
);

const BoxContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.3s ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.lightPrimary || "red"};
  }
  @media ${({ theme }) => theme.device.large} {
    /* Media query for large devices */
  }
  @media ${({ theme }) => theme.device.medium} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    &:last-of-type {
      border-right: none; /* Corrected selector, removed the colon after last-of-type */
    }
  }
  @media ${({ theme }) => theme.device.small} {
    flex-direction: row;
    border-right: none;
  }
`;

const BoxInnerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px 8px 16px 8px;
  @media ${({ theme }) => theme.device.small} {
    flex: auto;
    justify-content: center;
    padding: 8px 8px;
  }
`;

const BoxIconWrapper = styled.div`
  height: 144px;
  width: 144px;
  @media ${({ theme }) => theme.device.small} {
    height: 96px;
    width: 96px;
  }
`;

const BoxTitle = styled.h4`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.h4.desktop}px;
  line-height: 1.1;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.typography.h4.tablet}px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.typography.h4.tablet}px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.typography.h4.mobile}px;
  }
`;

const BoxDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.p.desktop}px;
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.device.xlarge} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.typography.p.mobile}px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.typography.p.mobile}px;
  }
`;

export default FooterBox;
