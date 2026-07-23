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
        { name: "entra", size: 450, color: "#FFEFDB" }, // Sabse bada size, isliye bada box dikhega
        { name: "security", size: 250, color: "#FFF9CD" }, // Usse chhota
        { name: "authorization", size: 100, color: "#E2FED9" },
        { name: "network", size: 80, color: "#E1F9EC" },
        { name: "resource..", size: 70, color: "#D9F7F7" },
        { name: "other", size: 20, color: "#FFF59D" },
        { name: "other", size: 10, color: "#FFD1DC" },
        { name: "other -1", size: 8, color: "#A5D6A7" },
        { name: "other-2", size: 12, color: "#90CAF9" },
      ],
    },
  ];

  return (
    <Treemap
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "100%",
        aspectRatio: 4 / 3,
      }}
      // isAnimationActive={false}
      data={data}
      dataKey="size"
      aspectRatio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
      // nodeInset={6}
      nodeGap={1}
      content={(props: any) => <CustomTreeMapStyle {...props} />}
    ></Treemap>
  );
}

interface TreemapProps extends SectorProps {
  payload: TreemapChild;
  depth?: number;
}

function CustomTreeMapStyle(props: TreemapProps) {
  const { x, y, width, height, name, color, depth } = props;

  if (depth !== 2) return null;
  console.log(depth);

  const isBoxBigEnough = (width as number) > 80 && (height as number) > 50;

  const customTextStyle: React.CSSProperties = {
    opacity: 1,
    fontSize: "12px",
    fontFamily: "Roboto, sans-serif",
    stroke: "black",
  };

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#8884d8" // Ek basic purple color
        stroke="white"
        strokeWidth={1}
        fillOpacity={1}
        style={{ fill: color }}
        // radius={20}
        rx={5}
      />

      {isBoxBigEnough && (
        <text
          x={(x as number) + (width as number) / 2}
          y={(y as number) + (height as number) / 2}
          textAnchor="middle" // Center text horizontally around X
          dominantBaseline="central"
          fontSize={18}
          style={customTextStyle}
          fillOpacity={1}
        >
          {name}
        </text>
      )}
    </g>
  );
}
