import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"; // DataLabels 플러그인

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Page5Chart = ({ chartData, onClick }) => {
  const pastelColors = [
    "rgba(255, 99, 132, 0.5)", // 연한 핑크색
    "rgba(54, 162, 235, 0.5)", // 연한 파란색
    "rgba(75, 192, 192, 0.5)", // 연한 청록색
    "rgba(153, 102, 255, 0.5)", // 연한 보라색
    "rgba(255, 206, 86, 0.5)", // 연한 노란색
    "rgba(255, 159, 64, 0.5)", // 연한 오렌지색
  ];
  const filterData = chartData
    .sort((a, b) => b.dep_defect_count - a.dep_defect_count)
    .reduce(
      (acc, cur, idx) => {
        if (idx < 5) {
          acc.dep.push(cur.dep);
          acc.dep_defect_count.push(cur.dep_defect_count);
        } else {
          if (!acc.dep.includes("기타")) {
            acc.dep.push("기타");
            acc.dep_defect_count.push(0); // 초기값 설정
          }
          acc.dep_defect_count[5] += cur.dep_defect_count;
        }
        return acc;
      },
      { dep: [], dep_defect_count: [] }
    );

  const length = filterData.dep.length;

  const Data = {
    labels: filterData.dep.splice(0, length),
    datasets: [
      {
        label: "보류건수",
        data: filterData.dep_defect_count.splice(0, length),
        backgroundColor: pastelColors.slice(0, length),
        borderColor: pastelColors.slice(0, length),
        borderWidth: 0.65,
      },
    ],
  };

  const options = {
    responsive: true, // 반응형
    plugins: {
      legend: {
        display: false, // 범례 비활성화
      },
      tooltip: {
        enabled: true, // 툴팁 활성화
      },
      datalabels: {
        color: "gray", // 레이블 색상을 검은색으로 변경
        display: true, // 레이블 표시
        formatter: (value, context) => {
          // 레이블을 표시하는 함수
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: "bold",
          size: 12,
          Family: "Spoqa-Bold",
        },
        padding: 5,
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div
      onClick={() => onClick(chartData[0].welding_meth)}
      style={{
        width: "150px",
        height: "150px",
        margin: "0 auto",
      }}
    >
      <Doughnut data={Data} options={options}></Doughnut>
    </div>
  );
};

export default Page5Chart;
