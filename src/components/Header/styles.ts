import styled from "styled-components";

export const Header = styled.header`
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`

export const HeaderContainer = styled.div`
    max-width: 112rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 1.6rem 0;

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

export const UserInfo = styled.div`
    a {
        display: block;
        text-decoration: none;
        background-color: #DD9700;
        color: #fff;
        padding: 0.8rem 1.4rem;
        border-radius: 20px;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`