import react from "react";
import finalData from "./ClimateData";

///////// WET BULB COLORS //////////
const wetBulbColorArray = [
  "#FFFFFF",
  "#ffe0d1",
  "#ffc2a3",
  "#ffa375",
  "#ff9157",
  "#ff7d2e",
  "#ff6905",
  "#e64c00",
  "#c22900",
  "#a80f00",
];

////////// MAIN ARRAY //////////

const mainWetBulbArray = [];

//////////// STATES ARRAY //////////

let alabamaArray = [];
let arizonaArray = [];
let arkansasArray = [];
let californiaArray = [];
let coloradoArray = [];
let connecticutArray = [];
let delawareArray = [];
let floridaArray = [];
let georgiaArray = [];
let idahoArray = [];
let illinoisArray = [];
let indianaArray = [];
let iowaArray = [];
let kansasArray = [];
let kentuckyArray = [];
let louisianaArray = [];
let maineArray = [];
let marylandArray = [];
let massachusettsArray = [];
let michiganArray = [];
let minnesotaArray = [];
let mississippiArray = [];
let missouriArray = [];
let montanaArray = [];
let nebraskaArray = [];
let nevadaArray = [];
let newHampshireArray = [];
let newJerseyArray = [];
let newMexicoArray = [];
let newYorkArray = [];
let northCarolinaArray = [];
let northDakotaArray = [];
let ohioArray = [];
let oklahomaArray = [];
let oregonArray = [];
let pennsylvaniaArray = [];
let rhodeIslandArray = [];
let southCarolinaArray = [];
let southDakotaArray = [];
let tennesseeArray = [];
let texasArray = [];
let utahArray = [];
let vermontArray = [];
let virginiaArray = [];
let washingtonArray = [];
let westVirginiaArray = [];
let wisconsinArray = [];
let wyomingArray = [];

/////////////// MAPPING SWITCH STATES /////////////
finalData.map((item) => {
  if (item.state === "AL") {
    switch (item.data.wetBulb) {
      case "1":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        alabamaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "AZ") {
    switch (item.data.wetBulb) {
      case "1":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        arizonaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "AR") {
    switch (item.data.wetBulb) {
      case "1":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        arkansasArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "CA") {
    switch (item.data.wetBulb) {
      case "1":
        californiaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        californiaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        californiaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        californiaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        californiaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        californiaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        californiaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        californiaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        californiaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        californiaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "CO") {
    switch (item.data.wetBulb) {
      case "1":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        coloradoArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "CT") {
    switch (item.data.wetBulb) {
      case "1":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        connecticutArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "DE") {
    switch (item.data.wetBulb) {
      case "1":
        delawareArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        delawareArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        delawareArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        delawareArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        delawareArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        delawareArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        delawareArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        delawareArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        delawareArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        delawareArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
 
  } else if (item.state === "FL") {
    switch (item.data.wetBulb) {
      case "1":
        floridaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        floridaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        floridaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        floridaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        floridaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        floridaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        floridaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        floridaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        floridaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        floridaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "GA") {
    switch (item.data.wetBulb) {
      case "1":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        georgiaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "ID") {
    switch (item.data.wetBulb) {
      case "1":
        idahoArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        idahoArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        idahoArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        idahoArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        idahoArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        idahoArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        idahoArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        idahoArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        idahoArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        idahoArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "IL") {
    switch (item.data.wetBulb) {
      case "1":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        illinoisArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
 
  } else if (item.state === "IN") {
    switch (item.data.wetBulb) {
      case "1":
        indianaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        indianaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        indianaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        indianaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        indianaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        indianaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        indianaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        indianaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        indianaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        indianaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "IA") {
    switch (item.data.wetBulb) {
      case "1":
        iowaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        iowaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        iowaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        iowaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        iowaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        iowaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        iowaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        iowaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        iowaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        iowaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "KS") {
    switch (item.data.wetBulb) {
      case "1":
        kansasArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        kansasArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        kansasArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        kansasArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        kansasArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        kansasArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        kansasArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        kansasArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        kansasArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        kansasArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "KY") {
    switch (item.data.wetBulb) {
      case "1":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        kentuckyArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "LA") {
    switch (item.data.wetBulb) {
      case "1":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        louisianaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "ME") {
    switch (item.data.wetBulb) {
      case "1":
        maineArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        maineArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        maineArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        maineArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        maineArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        maineArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        maineArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        maineArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        maineArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        maineArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "MD") {
    switch (item.data.wetBulb) {
      case "1":
        marylandArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        marylandArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        marylandArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        marylandArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        marylandArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        marylandArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        marylandArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        marylandArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        marylandArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        marylandArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "MA") {
    switch (item.data.wetBulb) {
      case "1":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        massachusettsArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "MI") {
    switch (item.data.wetBulb) {
      case "1":
        michiganArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        michiganArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        michiganArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        michiganArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        michiganArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        michiganArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        michiganArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        michiganArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        michiganArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        michiganArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "MN") {
    switch (item.data.wetBulb) {
      case "1":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        minnesotaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "MS") {
    switch (item.data.wetBulb) {
      case "1":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        mississippiArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "MO") {
    switch (item.data.wetBulb) {
      case "1":
        missouriArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        missouriArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        missouriArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        missouriArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        missouriArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        missouriArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        missouriArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        missouriArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        missouriArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        missouriArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "MT") {
    switch (item.data.wetBulb) {
      case "1":
        montanaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        montanaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        montanaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        montanaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        montanaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        montanaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        montanaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        montanaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        montanaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        montanaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "NE") {
    switch (item.data.wetBulb) {
      case "1":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        nebraskaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "NV") {
    switch (item.data.wetBulb) {
      case "1":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        nevadaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "NH") {
    switch (item.data.wetBulb) {
      case "1":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newHampshireArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "NJ") {
    switch (item.data.wetBulb) {
      case "1":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newJerseyArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "NM") {
    switch (item.data.wetBulb) {
      case "1":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newMexicoArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "NY") {
    switch (item.data.wetBulb) {
      case "1":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newYorkArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "NC") {
    switch (item.data.wetBulb) {
      case "1":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        northCarolinaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "ND") {
    switch (item.data.wetBulb) {
      case "1":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        northDakotaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "OH") {
    switch (item.data.wetBulb) {
      case "1":
        ohioArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        ohioArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        ohioArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        ohioArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        ohioArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        ohioArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        ohioArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        ohioArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        ohioArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        ohioArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "OK") {
    switch (item.data.wetBulb) {
      case "1":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        oklahomaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "OR") {
    switch (item.data.wetBulb) {
      case "1":
        oregonArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        oregonArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        oregonArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        oregonArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        oregonArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        oregonArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        oregonArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        oregonArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        oregonArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        oregonArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "PA") {
    switch (item.data.wetBulb) {
      case "1":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        pennsylvaniaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "RI") {
    switch (item.data.wetBulb) {
      case "1":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        rhodeIslandArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "SC") {
    switch (item.data.wetBulb) {
      case "1":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        southCarolinaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "SD") {
    switch (item.data.wetBulb) {
      case "1":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        southDakotaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
   
  } else if (item.state === "TN") {
    switch (item.data.wetBulb) {
      case "1":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        tennesseeArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "TX") {
    switch (item.data.wetBulb) {
      case "1":
        texasArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        texasArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        texasArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        texasArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        texasArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        texasArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        texasArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        texasArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        texasArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        texasArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "UT") {
    switch (item.data.wetBulb) {
      case "1":
        utahArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        utahArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        utahArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        utahArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        utahArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        utahArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        utahArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        utahArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        utahArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        utahArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "VT") {
    switch (item.data.wetBulb) {
      case "1":
        vermontArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        vermontArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        vermontArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        vermontArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        vermontArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        vermontArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        vermontArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        vermontArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        vermontArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        vermontArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "VA") {
    switch (item.data.wetBulb) {
      case "1":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        virginiaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "WA") {
    switch (item.data.wetBulb) {
      case "1":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        washingtonArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "WV") {
    switch (item.data.wetBulb) {
      case "1":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        westVirginiaArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "WI") {
    switch (item.data.wetBulb) {
      case "1":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        wisconsinArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  } else if (item.state === "WY") {
    switch (item.data.wetBulb) {
      case "1":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        wyomingArray.push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    
  }

  return;
});

mainWetBulbArray.push(
  alabamaArray,
  arizonaArray,
  arkansasArray,
  californiaArray,
  coloradoArray,
  connecticutArray,
  delawareArray,
  floridaArray,
  georgiaArray,
  idahoArray,
  illinoisArray,
  indianaArray,
  iowaArray,
  kansasArray,
  kentuckyArray,
  louisianaArray,
  maineArray,
  marylandArray,
  massachusettsArray,
  michiganArray,
  minnesotaArray,
  mississippiArray,
  missouriArray,
  montanaArray,
  nebraskaArray,
  nevadaArray,
  newHampshireArray,
  newJerseyArray,
  newMexicoArray,
  newYorkArray,
  northCarolinaArray,
  northDakotaArray,
  ohioArray,
  oklahomaArray,
  oregonArray,
  pennsylvaniaArray,
  rhodeIslandArray,
  southCarolinaArray,
  southDakotaArray,
  tennesseeArray,
  texasArray,
  utahArray,
  vermontArray,
  virginiaArray,
  washingtonArray,
  westVirginiaArray,
  wisconsinArray,
  wyomingArray
);

/////////// TRANSPARENT PUSH ////////////
JSON.stringify(mainWetBulbArray);
mainWetBulbArray.forEach((item) => {
  item.push("transparent");
  
})


export default mainWetBulbArray;

console.log(mainWetBulbArray);
