import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {},
    y: {
      type: "linear",
      display: true,
      position: "left", // 왼쪽 y축: 보류 건수
      title: {
        display: true,
        text: "건수 (보류)",
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right", // 오른쪽 y축: 전체 건수
      grid: {
        drawOnChartArea: false, // 두 번째 y축의 그리드라인을 비활성화
      },
      title: {
        display: true,
        text: "건수 (전체)",
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
  },
  barThickness: 20, // 막대의 두께를 조정 (20으로 설정)
};

const labels = ["보류", "전체"];

const data = {
  labels,
  datasets: [
    {
      label: "CNT",
      data: [15, 35], // 첫 번째 값은 보류, 두 번째 값은 전체
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "COT",
      data: [25, 45], // 첫 번째 값은 보류, 두 번째 값은 전체
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "LNG",
      data: [30, 40], // 첫 번째 값은 보류, 두 번째 값은 전체
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

function Page5Chart2() {
  return (
    <Box
      sx={{
        marginTop: "50px",
        width: "100%",
      }}
    >
      <Bar options={options} data={data} />
    </Box>
  );
}

export default Page5Chart2;
