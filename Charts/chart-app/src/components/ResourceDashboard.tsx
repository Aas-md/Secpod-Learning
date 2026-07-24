import ResourceChart from "./ResourceChart";
import filterIcon from "../assets/filter-fill-svgrepo-com.svg";
import brainIcon from "../assets/brain-upper-view-outline-svgrepo-com (1).svg";

export default function ResourceDashboard() {
  return (
    <div className="w-full min-h-0 h-full  bg-white l rounded-lg flex p-2 flex-col">
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-[#0a58a0]">
            Resource Distribution
          </p>
          <img src={filterIcon} style={{ height: "18px", width: "18px" }} />
          <img src={brainIcon} style={{ height: "18px", width: "18px" }} />
        </div>
        <p className="bg-gray-200 text-[#0a58a0] text-sm rounded px-2 opacity-50">
          CSV
        </p>
      </div>
     <div className="h-full min-h-0">
       <ResourceChart />
     </div>
    </div>
  );
}
