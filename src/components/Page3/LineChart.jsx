import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.js에 필요한 요소를 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement
);

const LineChart = ({ data }) => {
  const transData = data.reduce(
    (acc, cur) => {
      acc.labels.push(cur.respon_dep);
      acc.Plan_count.push(cur.Plan_count);
      acc.Completed_Tasks.push(cur.Completed_Tasks);
      acc.Achievement_Rate.push(cur.Achievement_Rate);
      return acc;
    },
    { labels: [], Plan_count: [], Completed_Tasks: [], Achievement_Rate: [] }
  );

  const chartData = {
    labels: transData.labels,
    datasets: [
      {
        label: "실행계획",
        data: transData.Plan_count,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "완료건수",
        data: transData.Completed_Tasks,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      datalabels: {
        formatter: (value, context) => {
          return value + "건"; // 레이블로 고정된 값 표시
        },
        color: "black",
        anchor: "end",
        align: "top",
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "300px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Line data={chartData} options={options} plugins={[ChartDataLabels]} />
    </Box>
  );
};

export default LineChart;
