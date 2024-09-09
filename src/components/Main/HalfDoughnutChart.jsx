// HalfDoughnutChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Chart.js 요소 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const HalfDoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    rotation: -90, // 반원 차트 회전 각도
    circumference: 180, // 반원으로 자름
    responsive: true, // 반응형
    plugins: {
      legend: {
        position: "right", // 범례 위치
      },
      tooltip: {
        enabled: true, // 툴팁 활성화
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default HalfDoughnutChart;
