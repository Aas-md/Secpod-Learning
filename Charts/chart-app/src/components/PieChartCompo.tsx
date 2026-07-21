import { Label, Pie, PieChart, Sector, type SectorProps } from "recharts";
import { updateScoreData } from "../Utils";
export interface MyDataPayload {
  name: string;
  value: number;
  color: string;
  isActive: boolean;
}

export default function PieChartCompo({ scoreData }: { scoreData: number }) {
  // Hum manually component ko call kar rahe hain aur props de rahe hain

  const data: MyDataPayload[] = updateScoreData(scoreData);
  return (
    <PieChart
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "40vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="80%"
        outerRadius="100%"
        innerRadius="65%"
        fill="#8884d8"
        startAngle={180}
        endAngle={0}
        shape={(props: any) => <CustomPieSector {...props} />}
      >
        <Label position="insideTopRight" fill="red" dy={70} dx={-55} className="font-semibold">0</Label>
        <Label position="insideTopRight" fill="orange" dy={-50} dx={35} className="font-semibold">50</Label>
         <Label position="insideTopRight" fill="#2ECC71" dy={70} dx={140} className="font-semibold">100</Label>
        <Label dy={75} fill="#2ECC71" dx={35} className="text-xs p-1">💹0% from last 1 week</Label>
        <Label
          position="centerTop"
          dy={25}
          fill="#2ECC71"
          className="font-semibold text-5xl"
        >
          {scoreData}
        </Label>
      </Pie>
    </PieChart>
  );
}

interface CustomPieSectorProps extends SectorProps {
  payload: MyDataPayload; // Recharts data object ko optional rakhta hai
}
const CustomPieSector = (props: CustomPieSectorProps) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload } =
    props;

  // Use the payload to determine styles
  const fillColor = payload.color;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fillColor}
    />
  );
};
