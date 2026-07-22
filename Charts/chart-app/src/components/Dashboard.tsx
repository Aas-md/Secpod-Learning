
import { data } from "../db";
import DashBoardCard from "./DashBoardCard";
import HygineScore from "./HygineScore";
import resourceIcon from '../assets/resource-prioritization-svgrepo-com.svg'
import starIcon from '../assets/star-svgrepo-com.svg'
import storageIcon from '../assets/storage-svgrepo-com.svg'
import costIcon from '../assets/money-stacks-of-coins-svgrepo-com.svg'
import cloudIcon from '../assets/upload-svgrepo-com.svg'
import addIcon from '../assets/add-row-svgrepo-com.svg'

export default function Dashboard() {
  return (
    <>
      <div className="container flex  flex-wrap bg-gray-200 gap-2 h-52">
        <div className="first-half flex flex-wrap gap-2 w-[calc(75%-1rem)]">
          <DashBoardCard name="Compute Resources" value={data.computeResources} icon={resourceIcon}/>
          <DashBoardCard name= "Monthly Cost" value={data.monthlyCost} icon={costIcon}/>  
          <DashBoardCard name="Storge Rousrouces" value ={data.storageResources} icon={storageIcon} />
          <DashBoardCard name="Publicly Accecible" value={data.publiclyAccessible} icon={cloudIcon}/>
          <DashBoardCard   name="Watch List Resoursces" value={data.watchListResources} icon={starIcon}/>
          <DashBoardCard name="Newly Added Resources" value={data.newlyAddedResources} icon={addIcon}/>
        </div>
        <div className="w-1/4 h-full">
          
          <HygineScore scoreData ={data.hygieneScore}/>
          
        </div>
      </div>
     
    </>
  );
}
