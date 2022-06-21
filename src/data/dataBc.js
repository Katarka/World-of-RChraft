import React from "react";
import getRandomValueFromArray from "../function/random";

const dataBC = {
        faction: ["Alliance", "Horde"],
        race: {
            "Alliance": ["Dwarf", "Gnome", "Human", "Night Elf", "Dranei"],
            "Horde": ["Orc", "Troll", "Tauren", "Undead", "Blood Elf"]
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
            "Blood Elf": ["Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
            "Dranei": ["Hunter", "Mage", "Paladin", "Priest", "Shaman", "Warrior"]
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
    faction = getRandomValueFromArray(dataBC.faction),
    race = getRandomValueFromArray(dataBC.race[faction]),
    classRace = getRandomValueFromArray(dataBC.class[race]),
    spec = getRandomValueFromArray(dataBC.spec[classRace]),
]

export const setNewRandomBC = () => newRandom().map((newRandom) => <pre>{newRandom}</pre>)
