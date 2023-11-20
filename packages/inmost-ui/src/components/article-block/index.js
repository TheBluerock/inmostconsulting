import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Spacer from "@components/spacer";
import Text from "@commons/text";
import { useTheme } from "@emotion/react";
import MarginController from "@commons/margin-controller";

const ArticleBlock = ({ link, title, author }) => {
  const theme = useTheme();

  return (
    <>
      <BoxContainer to={link} aria-label={`Go to ${title}`}>
        {/* 
              Image
                Title
                Published
                category
                Author
              Excerpt
            */}
        <MarginController>
          <ImageContainer />
          <TextContainer>
            <Text
              as={"h2"}
              fontSize={theme.typography.h3}
              fontFamily={"serif"}
              textTransform="uppercase"
            >
              {title}
            </Text>
            <Text as={"p"} fontSize={theme.typography.p}>
              {title}
            </Text>
            <Text fontSize={theme.typography.p} textTransform="uppercase">
              {author.name}
            </Text>
          </TextContainer>
        </MarginController>
      </BoxContainer>

      <Spacer space={16} star />
    </>
  );
};

export default ArticleBlock;

const BoxContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  flex: 1;
  cursor: pointer;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  transition: background 0.3s ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.lightPrimary};
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

const ImageContainer = styled.div`
  width: 240px;
  aspect-ratio: 1;
  border: 1px solid red;
  border-radius: 24px;
  margin: 8px 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin-left: 48px;
`;
