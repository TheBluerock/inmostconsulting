import React from "react";
import Container from "@commons/container";
import styled from "@emotion/styled";
import Text from "@commons/text";
import { useTheme } from "@emotion/react";

const OuterWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const RowWrapper = styled.div`
  margin: 0.5em 0;
`;

const BlogDetails = ({ date, author, category }) => {
  const theme = useTheme();

  React.useEffect(() => {
    console.log("author: " + author);
  }, []);

  return (
    <Container width={"65vw"}>
      <OuterWrapper>
        <LeftWrapper>
          <RowWrapper>
            <Text as={"span"} fontSize={theme.typography.p} fontWeight={400}>
              Pubblicato il:{" "}
            </Text>
            <Text as={"span"} fontSize={theme.typography.p}>
              {date}
            </Text>
          </RowWrapper>
          <RowWrapper>
            <Text as={"span"} fontSize={theme.typography.p} fontWeight={400}>
              Scritto da{" "}
            </Text>
            <Text as={"span"} fontSize={theme.typography.p}>
              {author.name}
            </Text>
          </RowWrapper>
        </LeftWrapper>
        <RightWrapper>
          <RowWrapper>
            <Text as={"span"} fontSize={theme.typography.p} fontWeight={400}>
              Nella categoria{" "}
            </Text>
            <Text as={"span"} fontSize={theme.typography.p}>
              {category.name}
            </Text>
          </RowWrapper>
          <RowWrapper>
            <Text as={"span"} fontSize={theme.typography.p} fontWeight={400}>
              Livello:
            </Text>
            <Text
              as={"span"}
              fontSize={theme.typography.p}
              color={theme.colors.secondary}
            >
              Base
            </Text>
          </RowWrapper>
        </RightWrapper>
      </OuterWrapper>
    </Container>
  );
};

export default BlogDetails;
