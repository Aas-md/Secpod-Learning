import reactLogo from "../assets/react.svg";


export default function DashBoardCard({ name,value}: {name : string,value :number}) {
  console.log(name)
  return (
    <>
      <div className="card basis-70 grow shrink bg-white h-25 flex flex-col justify-between p-2 pr-4 pb-3  rounded-lg  hover:cursor-pointer animation duration-300">
        {/* compute resources */}
        <div className="flex justify-between w-full">
          {/* image */}
          <div className="flex gap-1 items-center">
            <img src={reactLogo} alt="" className="h-1/2" />
            <p className="font-semibold ">{name}</p>
          </div>
          <p>{value}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm">Last Updated </p>
          <button className="text-blue-500 text-sm cursor-pointer hover:underline">
            View All
          </button>
        </div>
      </div>
    </>
  );
}
