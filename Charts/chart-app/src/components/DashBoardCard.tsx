import reactLogo from "../assets/react.svg";

export default function DashBoardCard({
  name,
  value,
  icon = reactLogo,
}: {
  name: string;
  value: number;
  icon?: string;
}) {
  console.log(name);
  return (
    <>
      <div className="card basis-70 grow shrink bg-white h-25 flex flex-col justify-between p-4 pr-4   rounded-lg  hover:cursor-pointer animation duration-300">
        {/* compute resources */}
        <div className="flex justify-between w-full">
          {/* image */}
          <div className="flex gap-2 items-center ">
           <div className="bg-gray-200 p-1 rounded"> <img src={icon} alt="" style={{ height: "16px !important",width:"16px" }}/></div>
            <p className="font-semibold font-roboto text-xs">{name}</p>
          </div>
          <p className="text-lg font-semibold">{value}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400 text-xs">Last Updated </p>
          <button className="text-blue-500 text-sm cursor-pointer hover:underline">
            View All
          </button>
        </div>
      </div>
    </>
  );
}
