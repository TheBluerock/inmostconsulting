import React from "react";
import styled from "@emotion/styled";
import QuickLink from "@layout/quick-link";

const QuickLinks = ({ links }) => {
  return (
    <OuterWrapper>
      <RowWrapper>
        {links &&
          links.map((link, index) => (
            <LinkWrapper key={index}>
              <QuickLink to={link.link} text={link.text} />
            </LinkWrapper>
          ))}
      </RowWrapper>
    </OuterWrapper>
  );
};

export default QuickLinks;

const OuterWrapper = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary} !important;
  @media ${({ theme }) => theme.device.small} {
    padding: 0 24px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
