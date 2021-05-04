import React, { useState } from 'react'
import Header from '../components/Header'
import { useForm } from '../hooks/useForm'
import { HomeTitle, HomeContainer, SectionSelect, InputContainer, SmiluationResult, Sections, ValidadtionParagh, ResultParagh} from '../styles/pages/Home'

import {calculateCostWithoutPlan , calculateCostWithPlan} from '../service/functions'

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


export default function Home() {
    const [selectedPlan, setSelectedPlan] = useState('')
    const [origin , setOrigin] = useState('')
    const [destination , setDestination] = useState('')
    const [minutes, setMinutes] = useState('')
    const [callCostWithoutPlan, setCallCostWithoutPlan] = useState('')
    const [callCostWithPlan, setCallCostWithPlan] = useState('')
    const [validationService, setValidationservice] = useState('')
    const [show, setShow] = useState(false)

    const { onChange } = useForm({ inputWithMinutes: '' })

    const handleInput = (event) => {     
        const { value, name } = event.target
        onChange(value, name)  

        if(value <= 0 ){
            alert('Por favor, digite um número positivo')
        }else{      
        setMinutes(Number(value))
        setShow(false)  
        }  
    }

    const submit = () => {  
        if(minutes && destination && origin && selectedPlan) {            
            const costWithoutPlan = calculateCostWithoutPlan(minutes, origin, destination, callCostPerMinute)
            const costWithPlan = calculateCostWithPlan(minutes, origin, destination, selectedPlan, callCostPerMinute)

            setCallCostWithoutPlan(costWithoutPlan)
            setCallCostWithPlan(costWithPlan)

            if (Number.isNaN(costWithPlan)) {
                setValidationservice('Serviço indisponível para as áreas solicitadas')
            } else {
                setValidationservice('')
            }
        }else{
            alert('por favor, preencha todos os campos')
        } 
        setShow(true)
    }
    //MONTANDO OS INPUTS
    const optionsOrigin = codes.map((item) => {
        return <option key={item} value={item}> {item}</option>
    })

    const changeSelectedPlan = (event) => {
        setSelectedPlan(event.target.value) 
        setShow(false)  
    }
    const changeSelectedOrigin = (event) => {
        setOrigin(event.target.value)  
    }
    //EXCLUINDO INPUT JÁ SELECIONADO NA ORIGEM PARA MONTAR DESTINO
    // eslint-disable-next-line array-callback-return
    const filteredOptions = codes.filter((item) => {
        if(item !== origin)
        return item
        }).map((item) => {
            return  <option key={item} value={item}> {item}</option>
        })
        
    const changeSelecteddestination = (event) => {
        setDestination(event.target.value)  
    }


    return (
        <HomeContainer>
            <Header />
            <HomeTitle>
                <p> Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são: FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
                </p>
            </HomeTitle>
            <h1>Calcule o valor da ligação conforme o plano</h1>
            <Sections>
                <SectionSelect>
                    <label>Selecione um Plano para a simulação </label>
                    <select required onChange={ changeSelectedPlan }>
                        <option desabled='true' value={""}>Escolha um plano</option>
                        <option value="30">FaleMais 30</option>
                        <option value="60">FaleMais 60</option>
                        <option value="120">FaleMais 120</option>
                    </select>
                    
                    <label>Selecione um local de origem </label>
                    <select onChange={ changeSelectedOrigin }>
                        <option desabled='true' value={""} >Origem</option>
                        { optionsOrigin }
                    </select>
                    <label>Selecione um local de destino </label>
                    <select desabled='true' onChange={ changeSelecteddestination }>
                        <option value={""}>Destino</option>
                        { filteredOptions }
                    </select>
        
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
                </SectionSelect>
                <SmiluationResult>
                    {
                        validationService 
                        ? 
                        <ValidadtionParagh>
                            { validationService }
                        </ValidadtionParagh> 
                        : 
                        (callCostWithoutPlan && show) 
                        &&  
                        <ResultParagh>
                            Falando { minutes } minutos 
                            <br /> 😀Fale Mais { selectedPlan } : ${ callCostWithPlan } 
                            <br />🙁Sem o plano: ${ callCostWithoutPlan }
                        </ResultParagh> 
                    }
                </SmiluationResult>
            </Sections>
        </HomeContainer>
    )
}
