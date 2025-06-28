import beach from '../../assets/images/Hawaii/beach.webp'
import beachTourist from '../../assets/images/Hawaii/beachTourist.webp'
import busHawaii from '../../assets/images/Hawaii/busHawaii.webp'
import cityViewTemple from  '../../assets/images/Hawaii/cityViewTemple.webp'
import forestTrees from '../../assets/images/Hawaii/forestTrees.webp'

export default function getImgData() {
  return {
    hawaii : hawaiiData,
    newYork : null,
    montreal : null
  }
}

const hawaiiData =  [{
      src : beach,
      alt : "beach",
      descId : "DESC_HAWAII_PH",
      id : 1
    },
    {
      src : beachTourist,
      alt : "beach with tourists",
      descId : "",
      id : 2
    },
     {
      src : busHawaii,
      alt : "bus in Hawaii",
      descId : "",
      id : 3
    },
     {
      src : cityViewTemple,
      alt : "Temple",
      descId : "",
      id : 4
    },
    {
      src : forestTrees,
      alt : "Trees in the forest",
      descId : "",
      id : 5
  }
];