import store from "../store/store";

let random = () => {
        let fraction = Math.floor(Math.random() * store.fraction.length)
        // return store.fraction[fraction]
        if (fraction == "Alliance") {
            let raceA = Math.floor(Math.random() * store.race.Alliance.length)
        }
        if (fraction == "Horde") {
            let raceB = Math.floor(Math.random() * store.race.Horde.length)
        return store[fraction]
    }
    // return store.race.Alliance[race]
}
alert(random(store.fraction))
alert(store.race.Alliance[random])

export default random