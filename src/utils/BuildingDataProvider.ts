import { useState, useEffect } from 'react';
import data from "../data/building.json";
import roles from '../data/roles.json';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string;
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    setBuildingData([...data]);
  }, [])


  const getFloorByIndex = (floorIndex:number): Floor =>
  {
    const floors: Floor[] = buildingData;
    return floors[floorIndex];
  }

  const getListOfActivities = (): string[]=>{
    const activities: string[] = [];
    buildingData.forEach((f: Floor) => {
      activities.push(f.activity);
    });
    return activities;
  }

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
