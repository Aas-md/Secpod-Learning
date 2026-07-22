import ServiceDistribution from "./ServiceDistribution";

export default function SecurityExposureDashboard() {
  return (
    <div className="w-full h-60 grid grid-cols-12">
      <div className="col-span-4">
        <ServiceDistribution />
      </div>
    </div>
  );
}
