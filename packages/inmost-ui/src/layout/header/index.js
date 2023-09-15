import React from 'react';
import styled from '@emotion/styled';
import Navigation from '@layout/navigation';
import NavLink from '@layout/nav-link';
import { useAppContext } from '@helpers/app-context';

const HeaderWrapper = styled.header`
    background: ${({ theme }) => theme.colors.background || 'white'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 10;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 0 64px;
    min-height: 54px;
`;

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: ${({ justify }) => justify};
`;

const LangSwitchContainer = styled(Container)`
    justify-content: space-between;
    flex: 1;
`;

const Header = () => {
    const { isDevice } = useAppContext();

    React.useEffect(() => {
        console.log(isDevice);
    }, [])

    return (
        <HeaderWrapper>
            <ContentWrapper>
                {/* <Container justify="flex-start">
                </Container> */}
                <LangSwitchContainer>
                    <Navigation>
                        <NavLink url={'/'} text={'Inmost'} asterisk/>
                        <NavLink url={'/About'} text={'About'} asterisk/>
                        <NavLink url={'/servizi/'} text={'Servizi'} asterisk/>
                        <NavLink url={'/articoli/'} text={'Articoli'} asterisk/>
                        <NavLink url={'/contatti/'} text={'Contatti'} asterisk/>
                    </Navigation>
                </LangSwitchContainer>
            </ContentWrapper>
        </HeaderWrapper>
    );
};

export default Header;
