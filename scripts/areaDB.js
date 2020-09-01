const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ootitemtracker"
);

const areaSeed = [
  {
    name: "kokiriForest",
    title: "Kokiri Forest",
    top: "425px",
    left: "950px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "dekuTree",
    title: "Deku Tree",
    top: "350px",
    left: "1100px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "lostWoods",
    title: "Lost Woods",
    top: "325px",
    left: "925px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "hyruleField",
    title: "Hyrule Field",
    top: "350px",
    left: "650px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "lonlonRanch",
    title: "Lon Lon Ranch",
    top: "225px",
    left: "575px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "hyruleMarket",
    title: "Hyrule Market",
    top: "155px",
    left: "600px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "kakVillage",
    title: "Kakariko Village",
    top: "155px",
    left: "775px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "graveyard",
    title: "Graveyard",
    top: "160px",
    left: "875px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "deathMountain",
    title: "Death Mountain",
    top: "100px",
    left: "750px",
    requiredItems: ["zeldasLetter", "bombs"],
    isAccessible: false,
  },
  {
    name: "goronCity",
    title: "Goron City",
    top: "60px",
    left: "800px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "dodongosCavern",
    title: "Dodongo's Cavern",
    top: "60px",
    left: "740px",
    requiredItems: ["bombs", "strength1", "bombchus"],
    isAccessible: false,
  },
  {
    name: "zorasRiver",
    title: "Zora's River",
    top: "225px",
    left: "925px",
    requiredItems: ["bombs", "silverScale"],
    isAccessible: false,
  },
  {
    name: "zorasDomain",
    title: "Zora's Domain",
    top: "175px",
    left: "1150px",
    requiredItems: ["ocarina", "lullaby", "silverScale"],
    isAccessible: false,
  },
  {
    name: "jabu",
    title: "Jabu Jabu",
    top: "125px",
    left: "1125px",
    requiredItems: ["bottle1"],
    isAccessible: false,
  },
  {
    name: "lakeHylia",
    title: "Lake Hylia",
    top: "550px",
    left: "455px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "forestTemple",
    title: "Forest Temple",
    top: "275px",
    left: "950px",
    requiredItems: ["hookshot", "ocarina", "minuet", "saria"],
    isAccessible: false,
  },
  {
    name: "fireTemple",
    title: "Fire Temple",
    top: "20px",
    left: "790px",
    requiredItems: ["redTunic", "hookshot", "ocarina", "bolero"],
    isAccessible: false,
  },
  {
    name: "iceCavern",
    title: "Ice Cavern",
    top: "100px",
    left: "1150px",
    requiredItems: ["rutosLetter", "silverScale", "bottle1", "ocarina", "lullaby", ],
    isAccessible: false,
  },
  {
    name: "waterTemple",
    title: "Water Temple",
    top: "640px",
    left: "440px",
    requiredItems: ["hookshot", "ironBoots", "blueTunic"],
    isAccessible: false,
  },
  {
    name: "bottomOfTheWell",
    title: "Bottom of the Well",
    top: "155px",
    left: "825px",
    requiredItems: ["ocarina", "songOfStorms"],
    isAccessible: false,
  },
  {
    name: "shadowTemple",
    title: "Shadow Temple",
    top: "150px",
    left: "930px",
    requiredItems: ["ocarina", "nocturn", "hookshot", "magic1", "dinsFire", "lensOfTruth"],
    isAccessible: false,
  },
  {
    name: "gerudoValley",
    title: "Gerudo Valley",
    top: "250px",
    left: "300px",
    requiredItems: [],
    isAccessible: true,
  },
  {
    name: "gerudoTrainingGround",
    title: "Gerudo Training Ground",
    top: "175px",
    left: "270px",
    requiredItems: ["longshot", "ocarina", "epona"],
    isAccessible: true,
  },
  {
    name: "desert",
    title: "Desert Wasteland/Oasis",
    top: "175px",
    left: "120px",
    requiredItems: ["ocarina", "requiem", "longshot", "hoverBoots", "lensOfTruth"],
    isAccessible: false,
  },
  {
    name: "spiritTemple",
    title: "Sprit Temple",
    top: "140px",
    left: "15px",
    requiredItems: [],
    isAccessible: false,
  },
  {
    name: "ganonsCastle",
    title: "Ganon's Castle",
    top: "60px",
    left: "625px",
    requiredItems: ["forestMedallion", "fireMedallion", "waterMedallion", "shadowMedallion", "spiritMedallion", "lightMedallion"],
    isAccessible: false,
  },
];

db.Area.remove({})
  .then(() => db.Area.collection.insertMany(areaSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted.");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
