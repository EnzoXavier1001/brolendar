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
    padding: 0.6rem 1.8rem;
    border-radius: 22px;
`