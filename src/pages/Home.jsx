import React, { useState } from 'react'
import Header from '../components/Header'
import { useForm } from '../hooks/useForm'
import { HomeTitle, HomeContainer, SectionSelect, InputContainer } from '../styles/pages/Home'


export default function Home() {
    const[selectedPlan, setSelectedPlan] = useState('')
    const [origin , setOrigin] = useState('')
    const [destiny , setDestiny] = useState('')
    const [minutes, setMinutes] = useState('')


    const codes = ['011', '016', '017', '018']
    const optionsOrigin = codes.map((item) => {
        return <option key={item} value={item}> {item}</option>
    })


    const changeSelectedPlan = (event) => {
        setSelectedPlan(event.target.value)   
    }
    const changeSelectedOrigin = (event) => {
        setOrigin(event.target.value)  
    }
    const filteredOptions = codes.filter((item) => {
        if(item !== origin)
        return item
    }).map((item) => {
        return  <option key={item} value={item}> {item}</option>
    })
    const changeSelectedDestiny = (event) => {
        setDestiny(event.target.value)  
    }

     function FormInput() {
         const { form, onChange } = useForm({ inputWithMinutes: '' })

         const handleInput = (event) => {
             const { value, name } = event.target
             onChange(value, name)
        }
      
        const submit = (event) => {
            setMinutes(form.inputWithMinutes)
        }
        
         return(
            <InputContainer>
                <label htmlFor="">Quantos minutos você quer falar</label>
                <input 
                    placeholder='Minutos'
                    type="number"
                    value={  form.inputWithMinutes }
                    name= { 'inputWithMinutes' }
                    onChange={ handleInput }
                />
                <button onClick= { submit }>Calcular</button>
                <p>{minutes}</p>
            </InputContainer>
         )
     }

    return (
        <HomeContainer>
            <Header />
            <HomeTitle>
                <p> Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são: FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
                </p>
            </HomeTitle>
            <h1>Calcule o valor da ligação conforme o plano</h1>
            <SectionSelect>
                <label htmlFor="">Selecione um Plano para a simulação </label>
                <select onChange={ changeSelectedPlan }>
                    <option value={" "}></option>
                    <option value="30">FaleMais 30</option>
                    <option value="60">FaleMais 60</option>
                    <option value="120">FaleMais 120</option>
                </select>
                
                <label htmlFor="">Selecione um local de origem </label>
                <select onChange={ changeSelectedOrigin }>
                    <option value={" "}></option>
                    {optionsOrigin}
                </select>
                <label htmlFor="">Selecione um local de destino </label>
                <select onChange={ changeSelectedDestiny }>
                    <option value={" "}></option>
                    {filteredOptions}
                </select>
            </SectionSelect>
           <FormInput />
        </HomeContainer>
    )
}
