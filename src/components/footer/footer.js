import React from 'react'
import styled from 'styled-components'

function header() {
    return (
        <Nav>
            <FooterRight>
                <a target="_blank" rel="noreferrer" href="https://github.com/captain-Arvoy/movie-booking-system"><img src="/images/github-icon.png" alt="Github Icon" /></a>
            </FooterRight>
        </Nav>
    )
}

export default header

const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`


const FooterRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width:50%;

    a {
        padding-right: 20px;
    }

    img {
        height: 30px;
    }
`