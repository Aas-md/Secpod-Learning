
import { data } from "../db";
import DashBoardCard from "./DashBoardCard";
import HygineScore from "./HygineScore";

export default function Dashboard() {
  return (
    <>
      <div className="container flex  flex-wrap bg-gray-200 gap-4  p-2  h-58">
        <div className="first-half flex  flex-wrap gap-4 w-[calc(75%-1rem)]">
          <DashBoardCard name="Compute Resources" value={data.computeResources}/>
          <DashBoardCard name= "Monthly Cost" value={data.monthlyCost}/>  
          <DashBoardCard name="Storge Rousrouces" value ={data.storageResources} />
          <DashBoardCard name="Publicly Accecible" value={data.publiclyAccessible}/>
          <DashBoardCard   name="Watch List Resoursces" value={data.watchListResources}/>
          <DashBoardCard name="Newly Added Resources" value={data.newlyAddedResources}/>
        </div>
        <div className="w-1/4 max-h-full">
          
          <HygineScore scoreData ={data.hygieneScore}/>
          
        </div>
      </div>
     
    </>
  );
}
