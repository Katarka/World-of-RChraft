import getRandomValueFromArray from "../function/random";
import dataWotlk from "./dataWotlk";

const dataClassic = {
        faction: ["Alliance", "Horde"],
        race: {
            "Alliance": ["Dwarf", "Gnome", "Human", "Night Elf"],
            "Horde": ["Orc", "Troll", "Tauren", "Undead"]
        },
        class: {
            "Dwarf": ["Death Knight", "Hunter", "Paladin", "Priest", "Rogue", "Warrior"],
            "Gnome": ["Death Knight", "Mage", "Rogue", "Warlock", "Warrior"],
            "Human": ["Death Knight", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
            "Night Elf": ["Death Knight", "Druid", "Hunter", "Priest", "Rogue", "Warrior"],
            "Undead": ["Death Knight", "Mage", "Priest", "Rogue", "Warlock", "Warrior"],
            "Orc": ["Death Knight", "Hunter", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Tauren": ["Death Knight", "Druid", "Hunter", "Shaman", "Warrior"],
            "Troll": ["Death Knight","Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior"],
        },
        spec: {
            "Death Knight": ["Blood", "Frost", "Unholy"],
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
