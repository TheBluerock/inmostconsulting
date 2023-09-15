import React from 'react';
import AsteriskSvg from '../../svg/asterisk.svg';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const OuterWrapper = styled.span`
    height: ${({ size}) => size}px;
    width: ${({ size }) => size}px;
`

const Asterisk = ({ size, stroke }) => {

    const theme = useTheme();

    return (
        <OuterWrapper size={ size }>
            <AsteriskSvg style={{ stroke: stroke || theme.colors.primary  }} />
        </OuterWrapper>
    )
}

export default Asterisk;