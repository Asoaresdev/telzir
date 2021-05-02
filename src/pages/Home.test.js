
import {calculateCostWithoutPlan} from './Home'
import {calculateCostWithPlan} from './Home'

const mockCostsPerMinute = {1: {2: 10, 3:20}, 2: {3: 15}}
test('calculo de custo de ligacao (sem plano)', () => {   
    const nCallMinutes = 100
    const origin = 1
    const destination = 2
    const expectedResult = 1000
    expect(calculateCostWithoutPlan(nCallMinutes, origin, destination, mockCostsPerMinute)).toEqual(expectedResult)  
    // usando origem nao definida na tabela de custos (gera erro)
    const unknownOrigin = 12
    expect(calculateCostWithoutPlan(nCallMinutes, unknownOrigin, destination, mockCostsPerMinute)).toEqual(Number.NaN)  
    // usando destino nao definido na tabela de custos 
    const unknownDestination = 12
    expect(calculateCostWithoutPlan(nCallMinutes, origin, unknownDestination, mockCostsPerMinute)).toEqual(Number.NaN)  
})

test('calculo de custo de ligacao (com plano)', () => {   
    const planTotalMinutes = 30
    const nCallMinutes = 100
    const origin = 1
    const destination = 2
    const expectedResult = 770
    expect(calculateCostWithPlan(nCallMinutes, origin, destination, planTotalMinutes, mockCostsPerMinute)).toBe(expectedResult)   
    const unknownOrigin = 12
    expect(calculateCostWithPlan(nCallMinutes, unknownOrigin, destination, planTotalMinutes, mockCostsPerMinute)).toEqual(Number.NaN)  
    // usando destino nao definido na tabela de custos 
    const unknownDestination = 12
    expect(calculateCostWithPlan(nCallMinutes, origin, unknownDestination, planTotalMinutes, mockCostsPerMinute)).toEqual(Number.NaN)      
})