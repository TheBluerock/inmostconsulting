import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Container from "@commons/container";
import SunLogo from "@components/sun-logo";
import Spacer from "@components/spacer";
import BigParagraph from "@components/big-paragraph";
import useMailChimp from "@helpers/use-mailchimp";
import { useTheme } from "@emotion/react";
import Text from "@commons/text";

const FooterMailchimp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { handleSubmit, canSubmit, submitting, message, success } =
    useMailChimp();

  useEffect(() => {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(email));
  }, [email]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const theme = useTheme();

  console.log("hello");

  return (
    <Wrapper>
      <Spacer space={4} />
      <Container>
        <SunLogo />
      </Container>
      <Spacer space={4} />
      <Container>
        <BigParagraph aside={"newsletter"}>
          <span className="aside">Newsletter</span> Inviamo solo informazioni
          significative e se desideri rimanere aggiornato, senza ricevere
          inutili comunicazioni, puoi lasciare qui la tua mail.
        </BigParagraph>
      </Container>
      <Spacer space={4} />
      <Container column>
        <form onSubmit={handleSubmit}>
          <StyledInput
            name={"email"}
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setIsValidEmail(isValidEmail && email !== "")}
            isValid={isValidEmail}
            placeholder="qui la tua email 🥰"
            autocomplete={true}
          />
          <StyledButton type={"submit"} disabled={isValidEmail}>
            <Text fontSize={theme.typography.h4}>
              {isValidEmail ? "valid" : "notvaid"}
            </Text>
          </StyledButton>
          <Spacer space={2} />
          <ErrorText visible={email != "" && !isValidEmail}>
            Inserisci un indirizzo valido 🙏{" "}
          </ErrorText>
        </form>
      </Container>
      <Spacer space={4} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledButton = styled.button`
  min-height: 64px;
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
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
