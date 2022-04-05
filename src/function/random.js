import store from "../store/store";

const random = () => {
    //Рандом фракции 0 || 1
    let randomFact = Math.floor(Math.random() * store.faction.length)
    let fact = store.faction[randomFact]
    // console.log(fact)
    //Рандом расы по значению фракции
    let randomCharHorde = Math.floor(Math.random() * store.race[fact].length)
    //console.log(store.race.Horde[raceChar1])
    let randomCharAlliance = Math.floor(Math.random() * store.race[fact].length)
    //console.log(store.race.Alliance[raceChar2])
    let raceChar = randomFact ? store.race[fact][randomCharHorde]
        : store.race[fact][randomCharAlliance]
    // console.log(raceChar)
    //Рандом класса по значению фракции
    let randomClass = Math.floor(Math.random() * store.class[raceChar].length)
    let classR = store.class[raceChar][randomClass]
    // console.log(classR)
    //Рандом спека по значению класса
    let randomSpec = Math.floor(Math.random() * store.spec[classR].length)
    let spec = store.spec[classR][randomSpec]
    // console.log(spec)
    console.log(`${fact} | ${raceChar} | ${classR} | ${spec}`)
}

random()

export default random