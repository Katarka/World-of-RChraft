import getRandomValueFromArray from "../function/random";

const dataClassic = {
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

const newRandom = (faction, race, classRace, spec) => [
    faction = getRandomValueFromArray(dataClassic.faction),
    race = getRandomValueFromArray(dataClassic.race[faction]),
    classRace = getRandomValueFromArray(dataClassic.class[race]),
    spec = getRandomValueFromArray(dataClassic.spec[classRace]),
]

export const setNewRandomClassic = () => newRandom().map((newRandom) => <pre>{newRandom}</pre>)
