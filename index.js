const returnFirstTwoDrivers = (drivers) => {
    const firstTwo = drivers.slice(0, 2)
    return firstTwo
}

const returnLastTwoDrivers = (drivers) => {
    const lastTwo = drivers.slice(-2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplyer) => {
    return (fare) => {
        return multiplyer * fare
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
}