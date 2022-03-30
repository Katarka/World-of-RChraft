import store from "../store/store";

let fact = ""
let raceChar = ""

const random = () => {
    fact = Math.floor(Math.random() * store.faction.length)
    console.log(store.faction[fact])
    raceChar = () => {
        if (fact === store.race.Horde){
            (Math.floor(Math.random() * store.race.Horde.length))
        }
        if (fact == store.race.Alliance){
            (Math.floor(Math.random() * store.race.Alliance.length))
        }
    }

    console.log(raceChar)
    return raceChar
}

// alert(store.race[random()])
random()
// alert(raceChar)

export default random