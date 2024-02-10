import styled from "styled-components";
import background from '../../assets/background.jpg'

export const HomeSection = styled.section`
    background: url(${background});
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;

    @media (max-width: 76.8rem) {
        width: 90%;
        margin: 0 auto;
    }
`

export const TitleHome = styled.h2`
    font-size: 1.8rem;
    margin-top: 0.4rem;
    text-align: center;
`

export const HomeForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2.0rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 45rem;
    background: #ccc;
    padding: 3.2rem;
    border-radius: 8px;

    > span {
        text-align: center;
        margin-top: 1.6rem;
    }

    > h3 {
        font-size: 2.4rem;
        margin-bottom: 1.4rem;
        text-align: center;
        color: #00282F;
    }

    @media (max-width: 46rem) {
        width: auto;
    }
`

export const FormInputWrapper = styled.div`
    margin-bottom: 1.4rem;

    > div {
        position: relative;
    }
`

export const FormInput = styled.input`
    width: 100%;
    padding: 0.8rem 1.2rem;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 8px;
`

export const HomeButton = styled.button`
    border: 0;
    padding: 1.2rem 1.4rem;
    border-radius: 8px;
    outline: none;
    background-color: #00282F;
    color: #fff;
    cursor: pointer;
    transition: filter 0.3s linear;

    &:hover {
        filter: brightness(0.8);
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 0.5rem;
`

export const ButtonShowPassword = styled.button`
    position: absolute;
    padding: 0.4rem;
    right: 3%;
    cursor: pointer;
    top: 10%;
    background: transparent;
    border: none;
`
