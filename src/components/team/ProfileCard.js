import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//icons
import { AiFillLinkedin } from 'react-icons/ai'

const ProfileCard = ({data}) => {
    // console.info({data})
    const image = getImage(data.headshot)
    return (
        <Card>
            <StyledGatsbyImage image={image} alt={`${data.first_name} ${data.last_name}`} />
            <Wrapper>
                <div>
                    <Name>{data.first_name} {data.last_name}</Name>
                    <Title>{data.position_title}</Title>
                    <Title className="subTitle">{data.position_subTitle}</Title>
                </div>
                <StyledLink href={data.profile_url} target="_blank" rel="noreferrer" aria-label={`${data.first_name} ${data.last_name}'s LinkedIn Profile`}>
                    <StyledIcon/>
                </StyledLink>
            </Wrapper>
            <Description>{data.description}</Description>
        </Card>
    )
}

export default ProfileCard

const StyledGatsbyImage = styled(GatsbyImage)`
    /* filter: grayscale(1) brightness(50%);
    transition: 0.4s cubic-bezier(0.075,0.82,0.165,1);
    &:hover {filter: brightness(100%)} */

`

const Card = styled.div`
    width: clamp(260px, 15vw, 330px);
    ${props => props.theme.lg`
        flex-basis: 35vw;
    `}
    ${props => props.theme.sm`
        flex-basis: 65vw;
    `}
    .gatsby-image-wrapper {
        filter: grayscale(1) brightness(1);
        transition: 0.5s cubic-bezier(0.075,0.82,0.165,1);
    }
    &:hover {
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
        .gatsby-image-wrapper {
            filter: grayscale(0) brightness(1)
        }
        a {
            color: #0072b1;
            transition: 0.5s cubic-bezier(0.075,0.82,0.165,1);
            /* transform: scale(1.25); */
        }
    }
`



const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: space-between;
`
const Name = styled.div`
    font-weight: bold;
    padding-top: 1.5rem;
    letter-spacing: 0.25em;

`
const Title = styled.div`
    font-style: italic;
    padding-top: 0.5rem;
    letter-spacing: 0.25em;
    &.subTitle {
        font-size: clamp(0.65rem, 10vw, 0.75rem);
        height: 1rem;
        padding-top: 9px;
        /* color: ${props => props.theme.colors.primary.main};
        background: ${props => props.theme.colors.gray.dark};; */
    }
`

const StyledLink = styled.a`
    color: ${props => props.theme.colors.gray.dark};
    &:hover {
        color: ${props => props.theme.colors.primary.main};
    }
`

const StyledIcon = styled(AiFillLinkedin)`
    font-size: 1.75rem;
`

const Description = styled.div`
    padding-top: 1.5rem;

`