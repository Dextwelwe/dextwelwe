import beach from '../../assets/images/Hawaii/XL/beach.webp'
import beachPeople from '../../assets/images/Hawaii/XL/beachPeople.webp'
import bus from '../../assets/images/Hawaii/XL/bus.webp'
import hike from '../../assets/images/Hawaii/XL/hike.webp'
import mountains from '../../assets/images/Hawaii/XL/mountains.webp'
import trees from '../../assets/images/Hawaii/XL/trees.webp'
import highway from '../../assets/images/Hawaii/XL/highway.webp'
import temple from  '../../assets/images/Hawaii/XL/temple.webp'
import treesForest from '../../assets/images/Hawaii/XL/treesForest.webp'

import beachLG from '../../assets/images/Hawaii/LG/beach.webp'
import beachPeopleLG from '../../assets/images/Hawaii/LG/beachPeople.webp'
import busLG from '../../assets/images/Hawaii/LG/bus.webp'
import hikeLG from '../../assets/images/Hawaii/LG/hike.webp'
import mountainsLG from '../../assets/images/Hawaii/LG/mountains.webp'
import treesLG from '../../assets/images/Hawaii/LG/trees.webp'
import highwayLG from '../../assets/images/Hawaii/LG/highway.webp'
import templeLG from  '../../assets/images/Hawaii/LG/temple.webp'
import treesForestLG from '../../assets/images/Hawaii/LG/treesForest.webp'

import beachSM from '../../assets/images/Hawaii/SM/beach.webp'
import beachPeopleSM from '../../assets/images/Hawaii/SM/beachPeople.webp'
import busSM from '../../assets/images/Hawaii/SM/bus.webp'
import hikeSM from '../../assets/images/Hawaii/SM/hike.webp'
import mountainsSM from '../../assets/images/Hawaii/SM/mountains.webp'
import treesSM from '../../assets/images/Hawaii/SM/trees.webp'
import highwaySM from '../../assets/images/Hawaii/SM/highway.webp'
import templeSM from  '../../assets/images/Hawaii/SM/temple.webp'
import treesForestSM from '../../assets/images/Hawaii/SM/treesForest.webp'


const hawaiiData =  [
    {
      srcXL : beach,
      srcLG : beachLG,
      srcSM : beachSM,
      alt : "beach",
      descId : "PHOTOGRAPHY.DESC_HAWAII_PH",
      id : 1
    },
    {
      srcXL : beachPeople,
      srcLG : beachPeopleLG,
      srcSM : beachPeopleSM,
      alt : "beach with tourists",
      descId : "",
      id : 2
    },
     {
      srcXL : bus,
      srcLG : busLG,
      srcSM : busSM,
      alt : "bus in Hawaii",
      descId : "",
      id : 3
    },
     {
      srcXL : temple,
      srcLG : templeLG,
      srcSM : templeSM,
      alt : "Temple",
      descId : "",
      id : 4
    },
    {
      srcXL : treesForest,
      srcLG : treesForestLG,
      srcSM : treesForestSM,
      alt : "Trees in the forest",
      descId : "",
      id : 5
  },
  {
     srcXL : beach,
     srcLG : beachLG,
     srcSM : beachSM,
      alt : "Trees in the forest",
      descId : "",
      id : 6
  },
  {
     srcXL : highway,
     srcLG : highwayLG,
     srcSM : highwaySM,
      alt : "Trees in the forest",
      descId : "",
      id : 7
  },
  {
     srcXL : hike,
     srcLG : hikeLG,
     srcSM : hikeSM,
      alt : "Hike",
      descId : "",
      id : 7
  },
  {
     srcXL : mountains,
     srcLG : mountainsLG,
     srcSM : mountainsSM,
      alt : "Hike",
      descId : "",
      id : 7
  },
  {
     srcXL : trees,
     srcLG : treesLG,
     srcSM : treesSM,
     alt : "Hike",
      descId : "",
      id : 7
  }
];

const NYCData = [
  {
     srcXL : require('../../assets/images/Nyc/XL/car.webp'),
     srcLG : require('../../assets/images/Nyc/LG/car.webp'),
     srcSM : require('../../assets/images/Nyc/SM/car.webp'),
     alt : "Car",
     descId : "",
     id : 1
  },
  {
     srcXL : require('../../assets/images/Nyc/XL/highscrapper.webp'),
     srcLG : require('../../assets/images/Nyc/LG/highscrapper.webp'),
     srcSM : require('../../assets/images/Nyc/SM/highscrapper.webp'),
     alt : "Highscrapper",
     descId : "",
     id : 2
  },
   {
     srcXL : require('../../assets/images/Nyc/XL/highscrapper2.webp'),
     srcLG : require('../../assets/images/Nyc/LG/highscrapper2.webp'),
     srcSM : require('../../assets/images/Nyc/SM/highscrapper2.webp'),
     alt : "Highscrapper 2",
     descId : "",
     id : 3
  },
  {
     srcXL : require('../../assets/images/Nyc/XL/bridge.webp'),
     srcLG : require('../../assets/images/Nyc/LG/bridge.webp'),
     srcSM : require('../../assets/images/Nyc/SM/bridge.webp'),
     alt : "Bridge",
     descId : "",
     id : 4
  },
  {
     srcXL : require('../../assets/images/Nyc/XL/subway.webp'),
     srcLG : require('../../assets/images/Nyc/LG/subway.webp'),
     srcSM : require('../../assets/images/Nyc/SM/subway.webp'),
     alt : "Subway",
     descId : "",
     id : 5
  },
  {
     srcXL : require('../../assets/images/Nyc/XL/statue.webp'),
     srcLG : require('../../assets/images/Nyc/LG/statue.webp'),
     srcSM : require('../../assets/images/Nyc/SM/statue.webp'),
     alt : "Statue",
     descId : "",
     id : 6
  },
  {
     srcXL : require('../../assets/images/Nyc/XL/entranceSubway.webp'),
     srcLG : require('../../assets/images/Nyc/LG/entranceSubway.webp'),
     srcSM : require('../../assets/images/Nyc/SM/entranceSubway.webp'),
     alt : "Entrance Subway",
     descId : "",
     id : 6
  }







];

export default function getImgData() {
  return {
    hawaii : {data : hawaiiData , descId : "PHOTOGRAPHY.GENERAL_DESC_HAWAII"},
    newYork : {data :NYCData, descId : "PHOTOGRAPHY.GENERAL_DESC_HAWAII"},
  //  montreal : {data :null, descId : null},
  //  montreal2 : {data :null, descId : null}
  }
}