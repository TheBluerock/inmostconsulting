import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";


const FooterBox = ({ title, description, icon, link }) => {

  return (
    <BoxContainer
      to={link}
      aria-label={`Go to ${title}`}
    >
      <BoxInnerWrapper>
        <BoxIconWrapper>{icon}</BoxIconWrapper>
      </BoxInnerWrapper>
      <BoxInnerWrapper>
        <BoxTitle>{title}</BoxTitle>
        <BoxDescription>{description}</BoxDescription>
      </BoxInnerWrapper>
    </BoxContainer>
  );
};

const BoxContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  flex: 1;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
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
      border-right: none;
    }
  }
  @media ${({ theme }) => theme.device.small} {
    flex-direction: row;
    align-items: center;
    border-right: none;
  }
`;

const BoxInnerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px 8px 16px 8px;
  @media ${({ theme }) => theme.device.small} {
    flex: none;
    justify-content: center;
    padding: 8px;
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
  font-size: ${({ theme }) => theme.typography.h5.desktop};
  line-height: 1.1;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.typography.h4.tablet};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: clamp(24px, ${({ theme }) => theme.typography.h4.mobile}, 48px);
  }
`;

const BoxDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.p.desktop};
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.device.xlarge} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.typography.p.tablet};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 24px;
  }
`;

export default FooterBox;
