import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { useScore } from "../scoreStore";

export default function ScorePage() {
  const score = useScore((state) => state.score);
  return (
    <>
      <h1 className="text-blue-400 text-center"> Scores Per over</h1>
      <div className="flex flex-row gap-2">
        {score?.map((curr, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span>{curr}</span>
            <span className="text-gray-400">{idx}</span>
          </div>
        ))}
      </div>
      <SimpleBarChart score={score} />
    </>
  );
}

interface SimpleBarChartProps {
  score: number[];
}

const SimpleBarChart = ({ score }: SimpleBarChartProps) => {
  let data = score.map((curr, idx) => ({ overs: idx.toString(), runs: curr }));

  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="overs" />
      <YAxis width="auto" unit="runs" />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="runs"
        fill="#8884d8"
        activeBar={{ fill: "pink", stroke: "blue" }}
        radius={[10, 10, 0, 0]}
      />
     
    </BarChart>
  );
};
