import store from "../store/store";

let fact = ""
let raceChar = ""

const random = () => {
    fact = Math.floor(Math.random() * store.faction.length)
    console.log(store.faction[fact])
    raceChar = fact ? store.race.Horde : store.race.Alliance
    console.log(raceChar)
    return raceChar
}

// alert(store.race[random()])
random()
// alert(raceChar)

export default random