const getRandomValueFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

const setNewRandom = ([data]) => {
    let faction = getRandomValueFromArray(data.faction);
    let race = getRandomValueFromArray(data.race[faction]);
    let classRace = getRandomValueFromArray(data.class[race]);
    let spec = getRandomValueFromArray(data.spec[classRace]);

    let res = {
        faction: faction,
        race: race,
        classRace: classRace,
        spec: spec,
    }

    return res
}

export default setNewRandom
