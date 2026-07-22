import filterIcon from "../assets/filter-fill-svgrepo-com.svg";
import brainIcon from "../assets/brain-upper-view-outline-svgrepo-com (1).svg";
import TreemapChartCompo from "../TreemapChartCompo";

export default function ServiceDistribution() {
  return (
    <div className="bg-white h-full rounded-lg p-2 flex flex-col">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-[#0a58a0]">
            Service Distribution
          </p>
          <img src={filterIcon} style={{ height: "18px", width: "18px" }} />
          <img src={brainIcon} style={{ height: "18px", width: "18px" }} />
        </div>
        <p className="bg-gray-200 text-[#0a58a0] text-sm rounded px-2 opacity-50">CSV</p>
      </div>

    <div className="flex-1 mt-px">
       <TreemapChartCompo/>
    </div>

    </div>
  );
}
