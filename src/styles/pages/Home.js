import styled from 'styled-components'


export const HomeContainer = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        text-transform:uppercase;
        font-size: 1.25rem;
    }
`
export const HomeTitle = styled.div`
    display: flex;
    padding: 2rem;
    p{
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 2rem;
        text-align: justify;
    }
    
`
export const SectionSelect = styled.section`
    display: flex;
    flex-direction: column;
    label {
        padding-top: 1rem;
    }

    select{
        height: 1.5rem;
        width: 10rem;
        border-radius: .5rem;
        margin-top: 1rem;
        border-bottom: 1px solid gray;
    }
    select option{
        font-size: 1rem;
    }
`

export const InputContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    width: 246px;
    
    input{
        height: 1.5rem;
        border-radius: .5rem;
        margin-top: 1rem;
        width: 156px;
    }
    button {
        color: white;
        background: red;
        width:156px;
        height: 1.5rem;
        margin-top: 1rem;
        border-radius: .5rem;
    }

`