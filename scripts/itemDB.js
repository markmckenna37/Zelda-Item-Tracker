const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ootitemtracker"
);

const itemSeed = [
  {
    name: "bow",
    isObtained: true  
  },
  {
    name: "hookshot",
    isObtained: true
  },
  {
    name: "longshot",
    isObtained: false
  },
  {
    name: "hammer",
    isObtained: false
  },
  {
    name: "bombs",
    isObtained: false
  },
  {
    name: "bombchus",
    isObtained: false
  },
  {
    name: "strength1",
    isObtained: false
  },
  {
    name: "strength2",
    isObtained: false
  },
  {
    name: "strength3",
    isObtained: false
  },
  {
    name: "kokiriSword",
    isObtained: false
  },
  {
    name: "biggoronSword",
    isObtained: false
  },
  {
    name: "dekuShield",
    isObtained: false
  },
  {
    name: "hylianShield",
    isObtained: false
  },
  {
    name: "mirrorShield",
    isObtained: false
  },
  {
    name: "blueTunic",
    isObtained: false
  },
  {
    name: "redTunic",
    isObtained: false
  },
  {
    name: "ironBoots",
    isObtained: false
  },
  {
    name: "hoverBoots",
    isObtained: false
  },
  {
    name: "dinsFire",
    isObtained: false
  },
  {
    name: "faroresWind",
    isObtained: false
  },
  {
    name: "nayrusLove",
    isObtained: false
  },
  {
    name: "magic1",
    isObtained: false
  },
  {
    name: "magic2",
    isObtained: false
  },
  {
    name: "fireArrow",
    isObtained: false
  },
  {
    name: "iceArrow",
    isObtained: false
  },
  {
    name: "lightArrow",
    isObtained: false
  },
  {
    name: "slingShot",
    isObtained: false
  },
  {
    name: "boomerang",
    isObtained: false
  },
  {
    name: "lensOfTruth",
    isObtained: false
  },
  {
    name: "ocarina",
    isObtained: false
  },
  {
    name: "ocarinaOfTime",
    isObtained: false
  },
  {
    name: "rutosNote",
    isObtained: false
  },
  {
    name: "bottle1",
    isObtained: false
  },
  {
    name: "bottle2",
    isObtained: false
  },
  {
    name: "bottle3",
    isObtained: false
  },
  {
    name: "bottle4",
    isObtained: false
  },
  {
    name: "beans",
    isObtained: false
  },
  {
    name: "skullMask",
    isObtained: false
  },
  {
    name: "maskOfTruth",
    isObtained: false
  },
  {
    name: "wallet1",
    isObtained: false
  },
  {
    name: "wallet2",
    isObtained: false
  },
  {
    name: "wallet3",
    isObtained: false
  },
  {
    name: "skull10",
    isObtained: false
  },
  {
    name: "skull20",
    isObtained: false
  },
  {
    name: "skull30",
    isObtained: false
  },
  {
    name: "skull40",
    isObtained: false
  },
  {
    name: "skull50",
    isObtained: false
  },
  {
    name: "lullaby",
    isObtained: false
  },
  {
    name: "epona",
    isObtained: false
  },
  {
    name: "saria",
    isObtained: false
  },
  {
    name: "songOfTime",
    isObtained: false
  },
  {
    name: "songOfStorms",
    isObtained: false
  },
  {
    name: "sunSong",
    isObtained: false
  },
  {
    name: "minuet",
    isObtained: false
  },
  {
    name: "bolero",
    isObtained: false
  },
  {
    name: "serenade",
    isObtained: false
  },
  {
    name: "nocturne",
    isObtained: false
  },
  {
    name: "requiem",
    isObtained: false
  },
  {
    name: "prelude",
    isObtained: false
  },
  {
    name: "emerald",
    isObtained: false
  },
  {
    name: "ruby",
    isObtained: false
  },
  {
    name: "sapphire",
    isObtained: false
  },
  {
    name: "forestMedallion",
    isObtained: false
  },
  {
    name: "fireMedallion",
    isObtained: false
  },
  {
    name: "waterMedallion",
    isObtained: false
  },
  {
    name: "shadowMedallion",
    isObtained: false
  },
  {
    name: "spiritMedallion",
    isObtained: false
  },
  {
    name: "lightMedallion",
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
