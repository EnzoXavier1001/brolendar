import styled from "styled-components";

export const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    > img {
        height: 10.0rem;
    }

`

export const TitleHome = styled.h2`
    font-size: 2rem;
    margin-top: 0.4rem;
`

export const HomeForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2.0rem;

    width: 45rem;

    background: #ccc;
    padding: 3.2rem;
    border-radius: 8px;

    > span {
        text-align: center;
        margin-top: 1.6rem;
    }
`

export const FormInputWrapper = styled.div`
    :first-child {
        margin-bottom: 1.4rem;
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
    text-transform: uppercase;
    margin-top: 3rem;
    padding: 0.4rem 1.4rem;
    border-radius: 8px;
    outline: none;
    background-color: #544DF0;
    color: #fff;
    cursor: pointer;
`