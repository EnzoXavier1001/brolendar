import styled from "styled-components";

export const HomeSection = styled.section``

export const HomeContainer = styled.div`
    max-width: 112rem;
    margin: 0 auto;

    margin-top: 6.0rem;
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
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.4rem;
`