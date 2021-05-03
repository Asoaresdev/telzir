import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    h1{
        text-transform:uppercase;
        font-size: 1.25rem;
        margin-top:2rem;
        color: #2E384D;

        @media (max-width:481px){
            font-size: 0.9rem;
            text-align: center;
            flex-grow:10;
        }
    }
`
export const HomeTitle = styled.div`
    display: flex;
    padding: 2.5rem 1rem 2.5rem 1rem;
    
    p{
        font-weight: bold;
        line-height: 2rem;
        text-align: center;
        font-size: 1.1rem;

        @media (max-width:481px){
            font-size: 0.8rem;
            line-height: 1.5rem;
        }
    }
`

export const Sections = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10rem;

    @media (max-width:481px){
        grid-template-columns:1fr;
        gap: 0;
        margin-top:0;
    }
`

export const SectionSelect = styled.section`
    display: flex;
    flex-direction: column;

    @media (max-width:481px){
        align-items: center;
    }

    label {
        padding-top: 1rem;

        @media (max-width:481px){
        font-size: 0.8rem;
        }
    }

    select{
        height: 1.8rem;
        width: 10rem;
        border-radius: .5rem;
        margin-top: 1rem;
        border: 1px solid lightgray;
        font-size: 1rem;
        
        @media (max-width:481px){
        height: 1.6rem;
        font-size: 0.8rem;
        height: 1.5rem;
        }
    }
    
    select option{
        font-size: 1rem;
        padding-left: 1.5rem;
    
        @media (max-width:481px){
        font-size: 0.6rem;
        }
    }
`

export const InputContainer = styled.section`
    display: flex;
    flex-direction: column;

    @media (max-width:481px){
        align-items: center;
        }
    
    input{
        height: 1.8rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        width: 10rem;
        border: 1px solid lightgray;
        padding-left: 0.5rem;

        @media (max-width:481px){
            height: 1.6rem;
            padding-left: 0.5rem;
            height: 1.5rem;
        }
    }

    button {
        color: white;
        background: #ffa4a2;
        width:160px;
        height: 1.8rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        /* margin-bottom: 0.5rem; */
        cursor: pointer;
        border: none;

        @media (max-width:481px){
            background: red;
        }
    }
    button:hover{
        background: red;
}
`

export const SmiluationResult = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width:481px){
        padding: 1.5rem 0;
    }
`

export const ResultParagh = styled.p`
    font-size:1.3rem;
    font-weight: bold;
    line-height: 2.5rem; 

    @media (max-width:481px){
        font-size:0.8rem;
        font-weight: bold;
        line-height: 2rem; 
    }
`
export const ValidadtionParagh = styled.p`
    font-size: 0.9rem;
    font-weight:normal;
    color: red;

    @media (max-width:481px){
        text-align: center;
    }
`

