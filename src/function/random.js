import store from "../store/store";

const random = () => {
    let fact = Math.floor(Math.random() * store.faction.length)
    console.log(store.faction[fact])
    let randomCharHorde = Math.floor(Math.random() * store.race.Horde.length)
    //console.log(store.race.Horde[raceChar1])
    let randomCharAlliance = Math.floor(Math.random() * store.race.Alliance.length)
    //console.log(store.race.Alliance[raceChar2])
    let raceChar = fact ? store.race.Horde[randomCharHorde]
        : store.race.Alliance[randomCharAlliance]
    console.log(raceChar)

    // for(let i = raceChar; i === store.class; i++){
    //     classRandom = Math.floor(Math.random() * i)
    //     console.log(i)
    // }
    // console.log(store.class[classRandom])
    // classRandom = store.class[raceChar]
    let randomClass = Math.floor(Math.random() * store.class[raceChar].length)
    let classR = store.class[raceChar][randomClass]
    console.log(classR)

    let randomSpec = Math.floor(Math.random() * store.spec[classR].length)
    let spec = store.spec[classR][randomSpec]
    console.log(spec)
    // classRandom = raceChar ? store.class[raceChar][classRandom1]
    //     : store.class[raceChar][classRandom1]
    debugger
}

// alert(store.race[random()])
random()
// alert(raceChar)

export default random