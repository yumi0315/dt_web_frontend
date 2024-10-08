// HalfDoughnutChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import "../../CSS/page2.css";
import "chartjs-plugin-datalabels"; // 데이터 레이블 플러그인 임포트

// Chart.js 요소 등록
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Progress = ({ chartData, style }) => {
  const transformData = chartData.reduce(
    (acc, cur) => {
      acc.labels.push(cur.stat);
      acc.data.push(cur.stat_count);

      return acc;
    },
    { labels: [], data: [] }
  );

  const data = {
    labels: transformData.labels,
    datasets: [
      {
        data: transformData.data,
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)", // 연한 파란색
          "rgba(255, 206, 86, 0.5)", // 연한 노란색
          "rgba(75, 192, 192, 0.5)", // 연한 청록색
          "rgba(255, 99, 132, 0.5)", // 연한 핑크색
          "rgba(153, 102, 255, 0.5)", // 연한 보라색
          "rgba(255, 159, 64, 0.5)", // 연한 오렌지색
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", // 진한 파란색
          "rgba(255, 206, 86, 1)", // 진한 노란색
          "rgba(75, 192, 192, 1)", // 진한 청록색
          "rgba(255, 99, 132, 1)", // 진한 핑크색
          "rgba(153, 102, 255, 1)", // 진한 보라색
          "rgba(255, 159, 64, 1)", // 진한 오렌지색
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    rotation: -90, // 반원 차트 회전 각도
    circumference: 180, // 반원으로 자름
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${chartData[0].proj} 작업 현황`,
        font: { Size: "25px", weight: "bold" },
      },
      labels: {
        padding: 40, //안되무
        boxWidth: 50,
      },
      padding: {
        right: 30,
      },
      legend: {
        position: "right",
      },
      tooltip: {
        enabled: true,
        // 툴팁 활성화
      },
      datalabels: {
        color: "grey",
        font: {
          weight: "bold",
          size: "13px",
        },
        offset: 15,
        // 차트 바깥으로 데이터 레이블을 이동
        clip: false,
      },
    },
    layout: {
      padding: {
        top: 20, // 차트와 상단의 간격
        bottom: 20, // 차트와 하단의 간격
      },
    },
  };

  return (
    <div className="Pie" style={style}>
      <Doughnut
        data={data}
        options={options}
        sx={{ fontFamily: "Spoqa-Bold" }}
      />
    </div>
  );
};

export default Progress;
