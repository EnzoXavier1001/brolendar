import styled from "styled-components";

export const Header = styled.header``

export const HeaderContainer = styled.div`
    max-width: 112rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 1.2rem 0;

    img {
        height: 6rem;
    }
`

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const NavLinks = styled.ul`
    display: flex;
    gap: 4rem;
    list-style: none;

    a {
        color: #00282F;
        text-decoration: none;
        font-size: 1.8rem;
    }
`

export const UserInfo = styled.div``