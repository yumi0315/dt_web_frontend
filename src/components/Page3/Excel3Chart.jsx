import React from "react";
import { Bar } from "react-chartjs-2";
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

const Excel3Chart = ({ data }) => {
  const transData = data?.reduce(
    (acc, cur) => {
      if (cur.dp_bom_desc === "Total") {
        return acc;
      }
      acc.dp_bom_desc.push(cur.dp_bom_desc);
      acc.Plan_count.push(cur.Plan_count);
      acc.Completed_Tasks.push(cur.Completed_Tasks);
      return acc;
    },
    { dp_bom_desc: [], Plan_count: [], Completed_Tasks: [] }
  );
  const chartData = {
    labels: transData?.dp_bom_desc,
    datasets: [
      {
        yAxisID: "y1",
        type: "bar",
        label: "계획량",
        data: transData.Plan_count,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        yAxisID: "y1",
        type: "bar",
        label: "완료량",
        data: transData.Completed_Tasks,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y1: {
        beginAtZero: true,
        // position: "top",
        // title: {
        //   display: true,
        //   text: "Bar차트",
        // },
        max: Math.max(transData?.Plan_count),
      },
    },
    plugins: {
      legend: {
        display: true,
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
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
    </Box>
  );
};

export default Excel3Chart;
