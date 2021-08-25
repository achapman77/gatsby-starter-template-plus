import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import animateScrollTo from 'animated-scroll-to';

//icons
import { AiOutlinePhone } from 'react-icons/ai'
import { GrChatOption } from 'react-icons/gr'

const QuickConnectBtns = ({className}) => {

    const data = useStaticQuery(graphql`
        query {
            contact_info: markdownRemark(fileAbsolutePath: {regex: "/contact_info/"}) {
                id
                frontmatter {
                    phone
                }
            }
        }
    `)

    const handleMenuLinkClick = (e) => {
        console.info('handleMenuLinkClick()')
        if (typeof window !== 'undefined' ) {
                e.preventDefault();
                let options = {
                verticalOffset: -80,
                speed: 500,
                easing: (t) => { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
                }
                animateScrollTo(document.querySelector(`#contact`, {options}))
        }
    }
    return (
        <Wrapper className={ className }>
            <QuickConnectButton 
                to="/#contact"
                onClick={e => handleMenuLinkClick(e)}
                className={ className }
            >
                <GrChatOption/>
                <TextWrapper className={ className }>
                    <span>|</span>
                    <span>Contact</span>
                </TextWrapper>                   
                
            </QuickConnectButton>
            <QuickConnectButton href={`tel:${data.contact_info.frontmatter.phone}`} rel="noreferrer" className={ className }>
                <AiOutlinePhone/>
                <TextWrapper className={ className }>
                    <span>|</span>
                    <span>{data.contact_info.frontmatter.phone}</span>
                </TextWrapper>
            </QuickConnectButton>
        </Wrapper>
    )
}

export default QuickConnectBtns


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: -webkit-fill-available;
`

const QuickConnectButton = styled(Link)`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    height: clamp(2.25rem, 2vw, 3rem);
    padding-left: clamp(1rem, 1vw, 2rem);
    padding-right: clamp(1rem, 1vw, 2rem);;
    text-decoration: none;
    color: white;
    svg {
        font-size: 1.5rem;
        path {
            stroke: white;
        }
    }
    &:hover {
        background: white;
        color: ${props => props.theme.colors.secondary.dark};
        svg path {
            stroke: ${props => props.theme.colors.secondary.dark};
        }
    }

    &.navMobile {
        padding: 0 1rem;
        height: 3rem;
        border-right: 1px solid ${props => props.theme.colors.gray.light};
    }
`
const TextWrapper = styled.div`
    display: flex;
    gap: 0.75rem;
    &.navMobile {
        display: none;
    }
`