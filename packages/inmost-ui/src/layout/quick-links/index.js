import React from "react";
import styled from "@emotion/styled";
import QuickLink from "@layout/quick-link";

const QuickLinks = ({ links }) => {
  return (
    <OuterWrapper>
      <RowWrapper>
        {links &&
          links.map((link, index) => (
            <QuickLink key={index} to={link.link} text={link.text} />
          ))}
      </RowWrapper>
    </OuterWrapper>
  );
};

export default QuickLinks;

const OuterWrapper = styled.nav`
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary} !important;
  @media ${({ theme }) => theme.device.small} {
    padding: 8px 16px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 24px;
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
  }
`;
