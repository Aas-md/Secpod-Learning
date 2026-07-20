import DashBoardCard from "./DashBoardCard";
import HygineScore from "./HygineScore";

export default function Dashboard() {
  return (
    <>
      <div className="container flex  flex-wrap bg-gray-200 gap-4  p-2 ">
        <div className="first-half flex  flex-wrap gap-4 w-[calc(75%-1rem)]">
          <DashBoardCard />
          <DashBoardCard />
          <DashBoardCard />
          <DashBoardCard />
          <DashBoardCard />
          <DashBoardCard />
        </div>
        <div className="w-1/4">
          <HygineScore />
        </div>
      </div>
    </>
  );
}
