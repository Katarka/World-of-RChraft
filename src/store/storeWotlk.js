import getRandomValueFromArray from "../function/random";

const store = {
    faction: ["Alliance", "Horde"],
    race: {
        "Alliance": ["Dwarf", "Gnome", "Human", "Night Elf"],
        "Horde": ["Orc", "Troll", "Tauren", "Undead"]
    },
    class: {
        "Dwarf": ["Hunter", "Paladin", "Priest", "Rogue", "Warrior"],
        "Gnome": ["Mage", "Rogue", "Warlock", "Warrior"],
        "Human": ["Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
        "Night Elf": ["Druid", "Hunter", "Priest", "Rogue", "Warrior"],
        "Undead": ["Mage", "Priest", "Rogue", "Warlock", "Warrior"],
        "Orc": ["Hunter", "Rogue", "Shaman", "Warlock", "Warrior"],
        "Tauren": ["Druid", "Hunter", "Shaman", "Warrior"],
        "Troll": ["Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior"],
    },
    spec: {
        "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
        "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
        "Mage": ["Arcane", "Fire", "Frost"],
        "Paladin": ["Holy", "Protection", "Retribution"],
        "Priest": ["Discipline", "Holy", "Shadow"],
        "Rogue": ["Assassination", "Combat", "Subtlety"],
        "Shaman": ["Elemental", "Enhancement", "Restoration"],
        "Warlock": ["Affliction", "Demonology", "Destruction"],
        "Warrior": ["Arms", "Fury", "Protection"]
    }
}

// export let faction, race, classRace, spec
//
// export const getRandom = [
//     faction = getRandomValueFromArray(store.faction),
//     race = getRandomValueFromArray(store.race[faction]),
//     classRace = getRandomValueFromArray(store.class[race]),
//     spec = getRandomValueFromArray(store.spec[classRace])
// ]

export default store