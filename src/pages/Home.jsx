import React, { useState } from 'react'
import Header from '../components/Header'
import { useForm } from '../hooks/useForm'
import { HomeTitle, HomeContainer, SectionSelect, InputContainer, SmiluationResult } from '../styles/pages/Home'


const callCostPerMinute = {
    11: {
        16: 1.9,
        17: 1.7,
        18: 0.9
    },
    16: {11: 2.9},
    17: {11: 2.7},
    18: {11: 1.9},  
   }
   const codes = ['011', '016', '017', '018']

export const calculateCostWithoutPlan = (minutes, origin, destination, costPerMinuteTable) => {
    const originTable = costPerMinuteTable[Number(origin)]
    if (originTable){
        const minCost = originTable[Number(destination)]
        const cost = Number((minutes * minCost).toFixed(2))
        return Number(cost)
    }
    else
        return Number.NaN
}

export const calculateCostWithPlan = (minutes, origin, destination, selectedPlan, costPerMinuteTable) => {
    const originTable = costPerMinuteTable[Number(origin)]
    if (originTable) {
        const minCost = originTable[Number(destination)]
        const cost = (Math.max((Number(minutes) - Number(selectedPlan)), 0) * minCost * 1.1).toFixed(2)

        return Number(cost)
    }
    else
        return Number.NaN
}

export default function Home() {
    const[selectedPlan, setSelectedPlan] = useState('')
    const [origin , setOrigin] = useState('')
    const [destiny , setDestiny] = useState('')
    const [minutes, setMinutes] = useState('')
    const [callCostWithoutPlan, setCallCostWithoutPlan] = useState(null)
    const [callCostWithPlan, setCallCostWithPlan] = useState(null)
    const [validationService, setValidationservice] = useState('')

    const { onChange } = useForm({ inputWithMinutes: '' })

    const handleInput = (event) => {   
        event.preventDefault()     
        const { value, name } = event.target
        onChange(value, name)        
        setMinutes(Number(value))
        
    }

    const submit = (event) => {  
    
        if(minutes && destiny && origin && selectedPlan) {            
            const costWithoutPlan = calculateCostWithoutPlan(minutes, origin, destiny, callCostPerMinute)
            const costWithPlan = calculateCostWithPlan(minutes, origin, destiny, selectedPlan, callCostPerMinute)            
            setCallCostWithoutPlan(costWithoutPlan)
            setCallCostWithPlan(costWithPlan)
            
            if (Number.isNaN(costWithPlan)) {
                setValidationservice('Serviço indisponível para as áreas solicitadas')
            } else {
                setValidationservice('')
            }
            
        }else{
            alert('preencha todos os campos')
        } 
    }

    
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
                    <option value={""}></option>
                    <option value="30">FaleMais 30</option>
                    <option value="60">FaleMais 60</option>
                    <option value="120">FaleMais 120</option>
                </select>
                
                <label htmlFor="">Selecione um local de origem </label>
                <select onChange={ changeSelectedOrigin }>
                    <option value={""} ></option>
                    {optionsOrigin}
                </select>
                <label >Selecione um local de destino </label>
                <select onChange={ changeSelectedDestiny }>
                    <option value={""}></option>
                    {filteredOptions}
                </select>
            </SectionSelect>
        
           <InputContainer>
            <label >Quantos minutos você quer falar</label>
            <input 
                placeholder='Minutos'
                type="number"
                name= { 'inputWithMinutes' }
                onChange={ handleInput }
            />
            <button onClick= { submit }>Calcular</button>
        </InputContainer>
            <SmiluationResult>
                
                {validationService ? <p>{validationService}</p> : 

                (callCostWithoutPlan && callCostWithPlan && selectedPlan && minutes && origin && destiny) ?  
                <p>Falando {minutes} minutos  com o plano <br /> Fale Mais {selectedPlan}: ${callCostWithPlan} <br />Sem o plano: ${callCostWithoutPlan}</p> 
                :
                 <p> Preencha os campos</p>
                 }    
            </SmiluationResult>
        </HomeContainer>
    )
}
