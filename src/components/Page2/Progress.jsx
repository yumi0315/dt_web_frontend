// HalfDoughnutChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import "../../CSS/page2.css";

// Chart.js 요소 등록
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Progress = ({ chartData }) => {
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
          "rgba(255, 99, 132, 0.2)", // 연한 핑크색
          "rgba(54, 162, 235, 0.2)", // 연한 파란색
          "rgba(75, 192, 192, 0.2)", // 연한 청록색
          "rgba(153, 102, 255, 0.2)", // 연한 보라색
          "rgba(255, 206, 86, 0.2)", // 연한 노란색
          "rgba(255, 159, 64, 0.2)", // 연한 오렌지색
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // 진한 핑크색
          "rgba(54, 162, 235, 1)", // 진한 파란색
          "rgba(75, 192, 192, 1)", // 진한 청록색
          "rgba(153, 102, 255, 1)", // 진한 보라색
          "rgba(255, 206, 86, 1)", // 진한 노란색
          "rgba(255, 159, 64, 1)", // 진한 오렌지색
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    rotation: -90, // 반원 차트 회전 각도
    circumference: 180, // 반원으로 자름
    responsive: true, // 반응형
    plugins: {
      title: {
        display: true,
        text: `${chartData[0].proj} 작업 현황`,
        fontSize: "20px",
      },
      legend: {
        position: "right", // 범례 위치
      },
      tooltip: {
        enabled: true, // 툴팁 활성화
      },
      // customTextPlugin: {
      //   id: "customTextPlugin",
      //   beforeDraw: (chart) => {
      //     const ctx = chart.ctx;
      //     const chartArea = chart.chartArea;
      //     const centerX = (chartArea.left + chartArea.right) / 2;
      //     const chartHeight = chartArea.bottom - chartArea.top;
      //     const centerY = chartArea.bottom - 20; // 차트의 가장 하단

      //     ctx.save();
      //     ctx.font = "bold 16px Arial"; // 폰트 스타일 설정
      //     ctx.fillStyle = "black"; // 텍스트 색상 설정
      //     ctx.textAlign = "center"; // 텍스트 정렬 설정
      //     ctx.textBaseline = "middle"; // 텍스트 기준선 설정
      //     ctx.fontFamily = "Spoqa-Bold";

      //     // 총 건수 텍스트
      //     const totalCount = selectData
      //       ? `총 건수: ${selectData.total_count}`
      //       : "총 건수: -";

      //     ctx.fillText(totalCount, centerX, centerY); // 텍스트 그리기
      //     ctx.restore();
      //   },
      // },
    },
  };

  return (
    <div
      className="Pie"
      style={{
        width: "500px",
        height: "300px",
        margin: "0 auto",
        borderRight: "1px solid #ccc",
      }}
    >
      <Doughnut
        data={data}
        options={options}
        sx={{ fontFamily: "Spoqa-Bold" }}
      />
    </div>
  );
};

export default Progress;
