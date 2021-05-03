
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