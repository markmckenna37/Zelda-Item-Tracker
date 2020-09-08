const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ootitemtracker"
  );


const itemSeed = [
    {
      name: "bow",
      title: "Bow",
      isObtained: false  
    },
    {
      name: "hookshot",
      title: "Hookshot",
      isObtained: false
    },
    {
      name: "longshot",
      title: "Longshot",
      isObtained: false
    },
    {
      name: "hammer",
      title: "Megaton Hammer",
      isObtained: false
    },
    {
      name: "bombs",
      title: "Bomb Bag",
      isObtained: false
    },
    {
      name: "bombchus",
      title: "Bombchus",
      isObtained: false
    },
    {
      name: "strength1",
      title: "Goron Bracelet",
      isObtained: false
    },
    {
      name: "strength2",
      title: "Silver Gauntlets",
      isObtained: false
    },
    {
      name: "strength3",
      title: "Gold Gauntlets",
      isObtained: false
    },
    {
      name: "kokiriSword",
      title: "Kokiri Sword",
      isObtained: false
    },
    {
      name: "biggoronSword",
      title: "Biggoron Sword",
      isObtained: false
    },
    {
      name: "dekuShield",
      title: "Deku Shield",
      isObtained: false
    },
    {
      name: "hylianShield",
      title: "Hylian Shield",
      isObtained: false
    },
    {
      name: "mirrorShield",
      title: "Mirror Shield",
      isObtained: false
    },
    {
      name: "silverScale",
      title: "Silver Scale",
      isObtained: false
    },
    {
      name: "goldScale",
      title: "Gold Scale",
      isObtained: false
    },
    {
      name: "blueTunic",
      title: "Zora Tunic",
      isObtained: false
    },
    {
      name: "redTunic",
      title: "Goron Tunic",
      isObtained: false
    },
    {
      name: "ironBoots",
      title: "Iron Boots",
      isObtained: false
    },
    {
      name: "hoverBoots",
      title: "Hover Boots",
      isObtained: false
    },
    {
      name: "dinsFire",
      title: "Din's Fire",
      isObtained: false
    },
    {
      name: "faroresWind",
      title: "Farore's Wind",
      isObtained: false
    },
    {
      name: "nayrusLove",
      title: "Nayru's Love",
      isObtained: false
    },
    {
      name: "magic1",
      title: "Magic",
      isObtained: false
    },
    {
      name: "magic2",
      title: "Magic Upgrade",
      isObtained: false
    },
    {
      name: "fireArrow",
      title: "Fire Arrows",
      isObtained: false
    },
    {
      name: "iceArrow",
      title: "Ice Arrows",
      isObtained: false
    },
    {
      name: "lightArrow",
      title: "Light Arrows",
      isObtained: false
    },
    {
      name: "slingShot",
      title: "Sling Shot",
      isObtained: false
    },
    {
      name: "boomerang",
      title: "Boomerang",
      isObtained: false
    },
    {
      name: "lensOfTruth",
      title: "Lens of Truth",
      isObtained: false
    },
    {
      name: "ocarina",
      title: "Ocarina",
      isObtained: false
    },
    {
      name: "ocarinaOfTime",
      title: "Ocarina of Time",
      isObtained: false
    },
    {
      name: "rutosNote",
      title: "Ruto's Note",
      isObtained: false
    },
    {
      name: "bottle1",
      title: "Bottle",
      isObtained: false
    },
    {
      name: "bottle2",
      title: "Bottle",
      isObtained: false
    },
    {
      name: "bottle3",
      title: "Bottle",
      isObtained: false
    },
    {
      name: "bottle4",
      title: "Bottle",
      isObtained: false
    },
    {
      name: "beans",
      title: "Magic Beans",
      isObtained: false
    },
    {
      name: "skullMask",
      title: "Skull Mask",
      isObtained: false
    },
    {
      name: "maskOfTruth",
      title: "Mask of Truth",
      isObtained: false
    },
    {
      name: "claimCheck",
      title: "Claim Check",
      isObtained: false
    },
    {
      name: "wallet1",
      title: "Adult Wallet",
      isObtained: false
    },
    {
      name: "wallet2",
      title: "Giant Wallet",
      isObtained: false
    },
    {
      name: "wallet3",
      title: "Titan Wallet",
      isObtained: false
    },
    {
      name: "skull10",
      title: "10 Gold Skulltulas",
      isObtained: false
    },
    {
      name: "skull20",
      title: "20 Gold Skulltulas",
      isObtained: false
    },
    {
      name: "skull30",
      title: "30 Gold Skulltulas",
      isObtained: false
    },
    {
      name: "skull40",
      title: "40 Gold Skulltulas",
      isObtained: false
    },
    {
      name: "skull50",
      title: "50 Gold Skulltulas",
      isObtained: false
    },
    {
      name: "lullaby",
      title: "Zelda's Lullaby",
      isObtained: false
    },
    {
      name: "epona",
      title: "Epona's Song",
      isObtained: false
    },
    {
      name: "saria",
      title: "Saria's Song",
      isObtained: false
    },
    {
      name: "songOfTime",
      title: "Song of Time",
      isObtained: false
    },
    {
      name: "songOfStorms",
      title: "Song of Storms",
      isObtained: false
    },
    {
      name: "sunSong",
      title: "Sun Song",
      isObtained: false
    },
    {
      name: "minuet",
      title: "Minuet of Forest",
      isObtained: false
    },
    {
      name: "bolero",
      title: "Bolero of Fire",
      isObtained: false
    },
    {
      name: "serenade",
      title: "Serenade of Water",
      isObtained: false
    },
    {
      name: "nocturne",
      title: "Nocturne of Shadow",
      isObtained: false
    },
    {
      name: "requiem",
      title: "Requiem of Spirit",
      isObtained: false
    },
    {
      name: "prelude",
      title: "Prelude of Light",
      isObtained: false
    },
    {
      name: "emerald",
      title: "Kokiri Emerald",
      isObtained: false
    },
    {
      name: "ruby",
      title: "Goron Ruby",
      isObtained: false
    },
    {
      name: "sapphire",
      title: "Zora Sapphire",
      isObtained: false
    },
    {
      name: "forestMedallion",
      title: "Forest Medallion",
      isObtained: false
    },
    {
      name: "fireMedallion",
      title: "Fire Medallion",
      isObtained: false
    },
    {
      name: "waterMedallion",
      title: "Water Medallion",
      isObtained: false
    },
    {
      name: "shadowMedallion",
      title: "Shadow Medallion",
      isObtained: false
    },
    {
      name: "spiritMedallion",
      title: "Spirit Medallion",
      isObtained: false
    },
    {
      name: "lightMedallion",
      title: "Light Medallion",
      isObtained: false
    }
  ];
  
  db.Item.remove({})
    .then(() => db.Item.collection.insertMany(itemSeed))
    .then((data) => {
      console.log(data.result.n + " records inserted.");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });