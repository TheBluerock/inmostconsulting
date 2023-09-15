import React from 'react';
import styled from '@emotion/styled';
import NavLink from '@layout/nav-link';

const OuterWrapper = styled.nav`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

const Navigation = ({ children }) => {
    return (
        <OuterWrapper>
           { children }
        </OuterWrapper>
    )
}

export default Navigation;
