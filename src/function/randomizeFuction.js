const getRandomValueFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

const setNewRandom = ([data]) => {
    const newRandom = (faction, race, classRace, spec) => [
        faction = getRandomValueFromArray(data.faction),
        race = getRandomValueFromArray(data.race[faction]),
        classRace = getRandomValueFromArray(data.class[race]),
        spec = getRandomValueFromArray(data.spec[classRace]),
    ]
    return (
        newRandom().map(newRandom => newRandom)
    )
}

export default setNewRandom
