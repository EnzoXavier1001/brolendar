import styled from "styled-components";
import backgroundParty from '../../assets/background-party.jpg'

export const PartySection = styled.section`
`

export const ContainerImg = styled.div`
    background: url(${backgroundParty});
    background-size: cover;
    width: 100%;
    height: 500px;
    filter: blur(5px);
    position: absolute;
`

export const PartyContainer = styled.div`
    max-width: 112rem;
    margin: 0 auto;
    position: relative;
    
    img {
        height: 500px;
        width: 100%;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
    }
`

export const PartContent = styled.div`
    padding: 6.4rem 2.4rem;

    background: rgb(245, 247, 248);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 0.8rem;

        h1 {
            color: #00282F;
        }

        span {
            font-size: 1.7rem;
        }
    }
`

export const PartyInfo = styled.div`
    margin-bottom: 1.8rem;
`

export const PartyDate = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    margin-bottom: 0.4rem;
`

export const PartyLocation = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`