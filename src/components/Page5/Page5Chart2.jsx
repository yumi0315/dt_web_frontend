import React, { useState, useEffect } from "react";
import { customFetch } from "../custom/customFetch";
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

function Page5Chart2() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChart2 = async () => {
      const result = await customFetch({
        path: `/page5/chart2`,
        method: "GET",
      });

      const processedData = result.map((item) => ({
        ...item,
        defect_count: Number(item.defect_count),
        total_count: Number(item.total_count),
      }));

      setChartData(processedData);
    };
    fetchChart2();
  }, []);

  const labels = chartData.map((item) => item.type1);

  const color = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(75, 192, 192, 0.5)",
  ];
  let maxNum = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  const datasets = [
    {
      label: "총 검사 건수",
      data: chartData.map((item) => {
        maxNum[0] = maxNum[0] < item.total_count ? item.total_count : maxNum[0];
        return item.total_count;
      }),
      backgroundColor: color[1],
      yAxisID: "y",
    },
    {
      label: "보류 건수",
      data: chartData.map((item) => {
        maxNum[1] =
          maxNum[1] < item.defect_count ? item.defect_count : maxNum[1];
        return item.defect_count;
      }),
      backgroundColor: color[0],
      yAxisID: "y1",
    },
  ];

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: false,
        title: {
          display: false,
        },
      },
      y: {
        id: "y",
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "총 검사 건수",
        },
        ticks: {
          beginAtZero: true,
        },
        max: 11000,
        // min: 4000,
      },
      y1: {
        id: "y1",
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false, // Hide the grid lines for the right y-axis
        },
        title: {
          display: true,
          text: "보류 건수",
        },
        ticks: {
          beginAtZero: true,
        },
        max: 100,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
    barThickness: 20,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "7px",
        width: "100%",
        height: "310px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Bar options={options} data={data} />
    </Box>
  );
}

export default Page5Chart2;
