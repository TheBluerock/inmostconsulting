import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Container from "@commons/container";
import SunLogo from "@components/rising-sun";
import Spacer from "@components/spacer";
import BigParagraph from "@components/big-paragraph";

const FooterMailchimp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(email));
  }, [email]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Wrapper>
      <Spacer space={8} />
      <Container>
        <SunLogo />
      </Container>
      <Spacer space={6} />
      <Container>
        <BigParagraph aside={"newsletter"}>
          <span className="aside">Newsletter</span> Ci impegniamo a inviarti
          solo informazioni significative. Se desideri rimanere aggiornato, puoi
          iscriverti alla nostra newsletter mensile.
        </BigParagraph>
      </Container>
      <Spacer space={6} />
      <Container column>
        <StyledInput
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => setIsValidEmail(isValidEmail && email !== "")}
          isValid={isValidEmail}
          placeholder="qui la tua email 🥰"
        />
        <Spacer space={2} />
        <ErrorText visible={email != "" && !isValidEmail}>
          Inserisci un indirizzo valido 🙏{" "}
        </ErrorText>
      </Container>
      <Spacer space={8} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledInput = styled.input`
  background: transparent;
  min-height: 64px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightPrimary};
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 48px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightPrimary};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 16px;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export default FooterMailchimp;
