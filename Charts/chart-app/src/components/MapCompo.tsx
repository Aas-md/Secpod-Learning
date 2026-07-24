// import { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { tile } from "d3-tile";

// export default function MapCompo() {
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     const width = 500;
//     const height = 230;

//     const center: [number, number] = [70, 22];

//     const zoom = 3;

//     const scale = (256 * 2 ** zoom) / (2 * Math.PI);

//     // Step 1:
//     const projection = d3
//       .geoMercator()
//       .center(center)
//       .scale(scale)
//       .translate([width / 2, height / 2]);

//     // Step 2:
//     const tiles = tile()
//       .size([width, height])
//       .scale(projection.scale() * 2 * Math.PI)
//       .translate(projection([0, 0])!)();

//     // Step 3:
//     const svg = d3.select(svgRef.current);

//     // ---- Background tiles draw karna ----
//     svg
//       .selectAll("image") // sab <image> tags select/target karo
//       .data(tiles) // in tiles se bind karo (kitne bhi ho, utne <image> banenge)
//       .join("image") // naye <image> elements banao jitni tiles hain
//       .attr(
//         "href",
//         //  (d) => `https://basemaps.cartocdn.com/light_all/${d[2]}/${d[0]}/${d[1]}.png`)
//         (d) =>
//           `https://basemaps.cartocdn.com/light_nolabels/${d[2]}/${d[0]}/${d[1]}.png`,
//       )
//       .attr("x", (d) => (d[0] + tiles.translate[0]) * tiles.scale) // tile ko screen pe kaha (x) rakhna hai
//       .attr("y", (d) => (d[1] + tiles.translate[1]) * tiles.scale) // tile ko screen pe kaha (y) rakhna hai
//       .attr("width", tiles.scale) // har tile image ki width
//       .attr("height", tiles.scale) // har tile image ki height
//       .attr("stroke", "#000000")
//       .style("opacity", 0.8);

//     // ---- 5 locations jo dikhane hain, dot se mark karne ke liye ----
//     const points: { name: string; coordinates: [number, number] }[] = [
//       { name: "India", coordinates: [78.9629, 23.5937] },
//       { name: "Dubai", coordinates: [55.2708, 25.2048] },
//       { name: "Saudi", coordinates: [45.0792, 23.8859] },
//       { name: "Nepal", coordinates: [84.124, 28.3949] },
//       { name: "Sri Lanka", coordinates: [80.7718, 7.8731] },
//       { name: "Mumbai", coordinates: [72.8777, 19.076] },
//       { name: "Delhi", coordinates: [77.209, 28.6139] },
//       { name: "Karachi", coordinates: [67.0011, 24.8607] },
//       { name: "China", coordinates: [104.1954, 35.8617] },
//     ];
//     const pointGroups = svg
//       .selectAll("g.point") // sab points ke groups select/target karo
//       .data(points) // points array se bind karo
//       .join("g") // naye <g> elements banao
//       .attr("class", "point")
//       .attr("transform", (d) => {
//         // yahi wo "translator" step hai — lat-long ko projection() se pixel (x,y) mein convert kiya
//         const [x, y] = projection(d.coordinates)!;
//         // us group ko us exact pixel position pe move (translate) kar diya
//         return `translate(${x},${y})`;
//       });

//     // Har group ke andar ek circle (dot) banaya
//     pointGroups
//       .append("circle")
//       .attr("r", 3) // dot ka radius (size)
//       .attr("fill", "#0a58a0") // dot ka color
//       .attr("stroke", "white") // dot ke around white border
//       .attr("stroke-width", 1);
//   }, []);

//   return (
//     <svg
//       ref={svgRef}
//       width="100%"
//       height="100%"
//       style={{ background: "white", borderRadius: "4px" }}
//     />
//   );
// }

