import type { MyDataPayload } from "./components/PieChartCompo";

export const updateScoreData = (scoreData: number) : MyDataPayload[] => {
  const totalSegments = 10;

  const indexText = {
    0: "Critical Risk",
    1: "Very Poor",
    2: "Poor",
    3: "Below Average",
    4: "Fair",
    5: "Average",
    6: "Good",
    7: "Very Good",
    8: "Outstanding",
    9: "Excellent",
  };

  function getColor(i: number) {
    const colors = [
      "#C0392B",
      "#E74C3C",
      "#E67E22",
      "#F39C12",
      "#F1C40F",
      "#F4D03F",
      "#F7DC6F",
      "#58D68D",
      "#27AE60",
      "#2ECC71",
    ];

    return colors[i];
  }

  //   const score = parseInt(scoreData ) || 0;
  const score = scoreData;

  const segmentSize = 100 / totalSegments;

  const minFillPercentage = 0.5; // Minimum fill of 0.5% for score 0

  return Array.from({ length: totalSegments }, (_, i) => {
    const segmentStart = i * segmentSize;

    const segmentEnd = (i + 1) * segmentSize;

    let segmentValue = 0;

    let segmentColor = "rgba(0,0,0,0.1)";

    if (score > segmentStart) {
      if (score >= segmentEnd) {
        // Score exceeds this segment, fill it completely

        segmentValue = segmentSize;

        segmentColor = getColor(i);
      } else {
        // Score falls within this segment, fill proportionally

        segmentValue = score - segmentStart;

        segmentColor = getColor(i);
      }
    } else if (score === 0 && i === 0) {
      // Special case: Show minimal fill for score 0 in the first segment

      segmentValue = minFillPercentage;

      segmentColor = getColor(i);
    }

    // Add small remaining portion for incomplete segments to maintain visual balance

    const remainingValue = segmentSize - segmentValue;

    return [
      // Filled portion

      ...(segmentValue > 0
        ? [
            {
              name: indexText[i as keyof typeof indexText],

              value: segmentValue,

              color: segmentColor,

              isActive: segmentValue > minFillPercentage || score > 0,
            },
          ]
        : []),

      // Unfilled portion

      ...(remainingValue > 0
        ? [
            {
              name: `${indexText[i as keyof typeof indexText]} (unfilled)`,

              value: remainingValue,

              color: "rgba(0,0,0,0.1)",

              isActive: false,
            },
          ]
        : []),
    ];
  }).flat();
};
