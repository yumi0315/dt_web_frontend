import { Bar } from "react-chartjs-2";
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

const Excel4Chart = () => {
  // 하드코딩된 임의의 데이터
  const chartData = {
    labels: ["9시", "10시", "11시", "12시", "1시", "2시"],
    datasets: [
      {
        yAxisID: "y1",
        type: "bar",
        label: "Bar차트",
        data: [3000, 5000, 4000, 7000, 2000, 5000], // 임의의 고정된 데이터
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        yAxisID: "y2",
        type: "line",
        label: "Line차트",
        data: [4000, 6000, 3000, 5000, 4000, 6000], // 임의의 고정된 데이터
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y1: {
        beginAtZero: true,
        position: "left",
        title: {
          display: true,
          text: "Bar차트",
        },
        max: 10000,
      },
      y2: {
        display: false,
        beginAtZero: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Line차트",
        },
        max: 10000,
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
    <div
      style={{
        width: "100%",
        height: "500px", // 고정된 높이 유지
        margin: "0px",
        padding: "10px",
        display: "flex", // Flexbox 사용
        justifyContent: "center", // 가로 중앙 정렬
        alignItems: "center", // 세로 중앙 정렬
      }}
    >
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default Excel4Chart;
