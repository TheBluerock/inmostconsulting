import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import styled from '@emotion/styled';

const primary = `${({ theme }) => theme.colors.primary }`;

const Wrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.primary };
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary };
`

const InnerText = styled.span`
    font-size: 5vw;
    color: ${({ theme }) => theme.colors.primary };
    font-family: ${({ theme }) => theme.fonts.serif };
    & > .slant {
        font-family: ${({ theme }) => theme.fonts.slant };
        margin: 0 24px;
    }

`


const TitleMarquee = ({ text }) => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        // Check if window is defined to ensure we're on the client side
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                // Check if the user is currently scrolling
                if (window.scrollY > 0) {
                    setIsScrolling(true);
                } else {
                    setIsScrolling(false);
                }
            };

            // Add a scroll event listener to the window
            window.addEventListener('scroll', handleScroll);

            // Clean up the listener when the component unmounts
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []); // Empty dependency array means this effect runs once after component mount

    return (
        <Wrapper>
            <Marquee autoFill={true} play={isScrolling}>
                <InnerText>
                    <span className='slant'>cosa</span> OFFRIAMO
                </InnerText>
            </Marquee>
        </Wrapper>
    );
};

export default TitleMarquee;
