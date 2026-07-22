import { Sector, Treemap, type SectorProps } from "recharts";

interface TreemapChild {
  name: string;
  size: number;
  color: string;
}

interface MyTreemap {
  name: string;
  children: TreemapChild[];
}
export default function TreemapChartCompo() {
  const data = [
    {
      name: "Service Distribution",
      children: [
        { name: "entra", size: 500, color: "#FFEEDB" }, // Sabse bada size, isliye bada box dikhega
        { name: "security", size: 250, color: "#FFF5CD" }, // Usse chhota
        { name: "authorization", size: 100, color: "#E2F4D9" },
        { name: "network", size: 80, color: "#E1F7EC" },
        { name: "resource..", size: 70, color: "#D9F3F7" },
        { name: "other", size: 20, color: "yellow" },
        { name: "other", size: 10, color: "pink" },
        { name: "other -1", size: 8, color: "green" },
        { name: "other-2", size: 12, color: "blue" },
      ],
    },
  ];

  return (
    <Treemap
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 4 / 3,
      }}
      data={data}
      dataKey="size"
      aspectRatio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
      content={(props: any) => <CustomTreeMapStyle {...props} />}
    ></Treemap>
  );
}

interface TreemapProps extends SectorProps {
  payload: MyTreemap;
}

function CustomTreeMapStyle(props: TreemapProps) {
  const { x, y, width, height, name,color } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#8884d8" // Ek basic purple color
        // fill={color}
        stroke="#fff" // White border taaki dabbe alag-alag dikhein
      />
      <text x={x as number+ 5} y={y as number + 15} fill="#fff" fontSize={18}>
        {name}
      </text>
    </g>
  );
}
