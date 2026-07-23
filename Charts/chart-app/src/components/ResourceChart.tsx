import {
  Label,
  Pie,
  PieChart,
  Sector,
  type PieLabelRenderProps,
  type SectorProps,
} from "recharts";

interface MyData {
  name: string;
  value: number;
}

const data = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const colors = [
  "#FCBD78",
  "#FCD971",
  "#BDDF92",
  "#98D6A3",
  "#94E0D3",
  "#A0D3F0",
  "#97B5E7",
  "#9BA3EB",
  "#B19FEB",
  "#BC6E6E",
  "#EE9C48",
  "#E6C274",
  "#9ABF62",
  "#61BC6D",
  "#6EBBAB",
  "#5981BC",
  "#707CC4",
  "#7F6ECE",
  "#FCBEBF",
  "#FDD8AE",
  "#FDE8A9",
  "#D6ECBD",
  "#C2E7C8",
  "#BFECE5",
  "#C6E5F7",
  "#C2D3F1",
  "#C3C8F2",
  "#D1C5F3",
  "#FA9293",
  "#F28D35",
  "#F47C7C",
  "#FFD166",
  "#06D6A0",
  "#118AB2",
  "#073B4C",
  "#8D6CAB",
  "#C45BAA",
  "#FF6B6B",
  "#F4A261",
  "#E76F51",
  "#2A9D8F",
  "#264653",
  "#9B5DE5",
  "#F15BB5",
  "#FF99C8",
  "#FCF6BD",
  "#D0F4DE",
  "#A9DEF9",
  "#E4C1F9",
  "#99C1B9",
  "#D81159",
  "#8F2D56",
  "#218380",
  "#73D2DE",
  "#FE5F55",
  "#2E4057",
  "#FF9F1C",
  "#FFBF69",
  "#CBF3F0",
  "#9E2A2B",
  "#FF686B",
  "#8338EC",
  "#3A86FF",
  "#FFBE0B",
  "#FB5607",
  "#FF006E",
  "#83C5BE",
  "#006D77",
  "#EDF6F9",
  "#E29578",
  "#FFDDD2",
  "#6A0572",
  "#AB83A1",
  "#50514F",
  "#F25F5C",
  "#FFE066",
  "#247BA0",
  "#70C1B3",
  "#D4A5A5",
  "#BF1363",
  "#6A0572",
  "#EE4266",
  "#FFD23F",
  "#3BCEAC",
  "#00A6FB",
  "#009EFA",
  "#42B983",
  "#223843",
  "#A2D5F2",
  "#07689F",
  "#50CB93",
  "#E36588",
  "#F7A440",
  "#F25F5C",
  "#F8B400",
  "#F85A3E",
  "#3F826D",
  "#A846A0",
  "#CE7DA5",
  "#23B5D3",
  "#75DDDD",
  "#FFA69E",
  "#A9DEF9",
  "#5E6472",
  "#B37BA4",
  "#A7C4BC",
  "#878ECD",
  "#F5DD61",
  "#D1F0B1",
  "#BD4F6C",
  "#DE8F6E",
  "#748CAB",
  "#0E9594",
  "#F4F1BB",
  "#DA627D",
  "#DB4C40",
  "#BFD7EA",
  "#F4A9A8",
  "#685369",
  "#505A5B",
  "#424874",
  "#D7C49E",
  "#B4CDED",
  "#6B4226",
  "#C0D461",
  "#9E7BFF",
  "#2B59C3",
  "#FF8360",
  "#3D348B",
  "#F9DC5C",
  "#C32F27",
  "#76B041",
  "#D3C0D2",
  "#CC2936",
  "#A29BFE",
  "#130F40",
  "#F4B400",
  "#05DFD7",
];

export default function ResourceChart() {
  return (
    <PieChart
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
     
    >
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius="45%"
        outerRadius="60%"
        fill="#8884d8"
        shape={(props: any) => <CustomShape {...props} />}
        
      />
      <Label>Hello Label</Label>
    </PieChart>
  );
}

interface MydataProps extends SectorProps {
  data: MyData[];
  index: number;
}

function CustomShape(props: MydataProps) {
  let { index } = props;

  console.log(props);

  return <Sector {...props} fill={colors[index % colors.length]} />;
}
