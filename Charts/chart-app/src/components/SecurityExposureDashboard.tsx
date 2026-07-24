import MapDashboard from "./MapDashboard";
import ResourceDashboard from "./ResourceDashboard";
import ServiceDistribution from "./ServiceDistribution";

export default function SecurityExposureDashboard() {
  return (
    <div className="w-full h-60 grid grid-cols-12 grid-rows-1 gap-1">
      <div className="col-span-4 ">
        <ServiceDistribution />
      </div>
      <div className="col-span-3 h-full">
        <ResourceDashboard />
      </div>
      <div className="col-span-5 h-full">
        <MapDashboard />
      </div>
    </div>
  );
}
