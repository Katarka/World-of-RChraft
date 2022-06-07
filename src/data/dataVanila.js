const dataVanila = {
        faction: ["Alliance", "Horde"],
        race: {
            "Alliance": ["Dwarf", "Gnome", "Human", "Night Elf", "Dranei", "Worgen", "Pandaren",
                "Void Elf", "Lightforged Draenei", "Dark Iron Dwarf", "Kul Tiran", "Mechagnome"],
            "Horde": ["Orc", "Troll", "Tauren", "Undead", "Blood Elf", "Goblin", "Pandaren",
                "Nightborne", "Highmountain Tauren", "Mag'har Orc", "Zandalari Troll", "Vulpera"]
        },
        class: {
            "Dranei": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Shaman", "Warrior", "Monk"],
            "Dwarf": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
            "Gnome": ["Death Knight", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
            "Human": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
            "Night Elf": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warrior", "Monk", "Demon Hunter"],
            "Worgen": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior"],
            "Blood Elf": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior", "Monk", "Demon Hunter"],
            "Undead": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
            "Goblin": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Orc": ["Death Knight", "Hunter", "Mage", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
            "Tauren": ["Death Knight", "Druid", "Hunter", "Paladin", "Priest", "Shaman", "Warrior", "Monk"],
            "Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
            "Pandaren": ["Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Monk"],
            "Void Elf": ["Death Knight", "Rogue", "Hunter", "Mage", "Priest", "Warlock", "Monk"],
            "Lightforged Draenei": ["Death Knight", "Hunter", "Mage", "Priest", "Paladin", "Warrior"],
            "Dark Iron Dwarf": ["Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Death Knight"],
            "Kul Tiran": ["Druid", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior", "Death Knight", "Monk"],
            "Mechagnome": ["Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Death Knight", "Monk"],
            "Nightborne": ["Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Death Knight", "Monk"],
            "Highmountain Tauren": ["Druid", "Hunter", "Shaman", "Warrior", "Death Knight", "Monk"],
            "Mag'har Orc": ["Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior", "Death Knight", "Monk"],
            "Zandalari Troll": ["Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warrior", "Death Knight", "Monk"],
            "Vulpera": ["Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Death Knight", "Monk"]
        },
        spec: {
            "Death Knight": ["Blood", "Frost", "Unholy"],
            "Demon Hunter": ["Havoc", "Vengeance"],
            "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
            "Hunter": ["Beastmaster", "Marksmanship", "Survival"],
            "Mage": ["Arcane", "Fire", "Frost"],
            "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
            "Paladin": ["Holy", "Protection", "Retribution"],
            "Priest": ["Discipline", "Holy", "Shadow"],
            "Rogue": ["Assassination", "Outlaw", "Subtlety"],
            "Shaman": ["Elemental", "Enhancement", "Restoration"],
            "Warlock": ["Affliction", "Demonology", "Destruction"],
            "Warrior": ["Arms", "Fury", "Protection"]
        }
}


export default dataVanila;