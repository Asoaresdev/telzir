import styled from 'styled-components'

export const HeaderContainer = styled.div`
    max-height: 15vh;
    display: flex;
    align-items: center;
    padding: 3rem 5rem;
    background: white;
    min-width: 100vw;
    div{
        background: white;
    }

    @media (max-width:481px){
        padding:  4rem 0;
        justify-content: center;
    }
`

export const Image = styled.img`
    width: 10rem;
    
    @media (max-width:481px){
        width: 8rem;
    }
`