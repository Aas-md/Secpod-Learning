import PieChartCompo from "./PieChartCompo";

export default function ({ scoreData }: { scoreData: number }) {
  return (
    <div className="card basis-70 grow shrink bg-white h-full flex flex-col items-center justify-center  rounded-lg  hover:cursor-pointer animation duration-300 ">
      <div className="flex w-full justify-start shrink-0">
        <p className="text-purple-600 text-xs p-2 font-semibold font-roboto">
          Cyber hygiene Score
        </p>
      </div>
      <div className="min-h-0 w-full flex ">
        <PieChartCompo scoreData={scoreData} />
      </div>
      {/* <p >💹 0% from last 1 week</p> */}
    </div>
  );
}

//  <div className="rounded-full border-8  h-45 w-45 border-t-green-500 border-r-red-500 border-b-yellow-400 border-l-blue-500 flex justify-center items-center">
//         84
//       </div>
