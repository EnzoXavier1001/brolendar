import styled from "styled-components";

export const HomeSection = styled.section``

export const HomeContainer = styled.div`
    max-width: 112rem;
    margin: 0 auto;

    margin-top: 6.0rem;
    
    @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
        margin-top: 6.0rem;
    }
`

const colors = [
    '#007bff',
    '#dc3545',
    '#ffc107',
    '#28a745'
]

export const StatusStyles = styled.td<{$status: number;}>`
    background: ${props => colors[props.$status] };
    color: #fff;
    padding: 0.6rem 1.2rem;
    font-weight: 500;
    border-radius: 22px;
`

export const HomeHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.4rem;

    div:first-child {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    @media (max-width: 550px) {
        gap: 1.5rem;
        justify-content: center;
    }
`

export const WrapperInput = styled.div`
    position: relative;

    input {
        outline: none;
        padding: 0.8rem 1.4rem;
        border: none;
        border: 1px solid #DD9700;
        border-radius: 8px;
    }
`

export const CategoryGroup = styled.div``

export const CategoryButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.8rem;
    margin-top: 1.8rem;
    margin-bottom: 4.0rem;
`
export const CategoryCard = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CategoryCardDiv = styled.div`
    background-color: #00282F;
    color: #FFF;
    padding: 1.8rem;
    clip-path: circle();
    cursor: pointer;
`