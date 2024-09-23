import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"; // DataLabels 플러그인

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Page5Chart = ({ chartData, onClick }) => {
  const pastelColors = [
    "#F8BBD0", // Light Pink
    "#F4B9A1", // Light Coral
    "#F7E5D3", // Light Peach
    "#D0E6F4", // Light Blue
    "#C4E1C1", // Light Mint Green
    "#F0E5CF", // Light Beige
    "#E6D0C4", // Light Tan
    "#DCE4F0", // Light Periwinkle
    "#F5F3F5", // Very Light Gray
    "#C3E1C3", // Pale Olive Green
  ];
  const filterData = chartData.reduce(
    (acc, cur) => {
      acc.dep.push(cur.dep);
      acc.dep_defect_count.push(cur.dep_defect_count);

      return acc;
    },
    { dep: [], dep_defect_count: [] }
  );

  const length = filterData.dep.length > 5 ? 5 : filterData.dep.length;

  const Data = {
    labels: filterData.dep.splice(0, 5),
    datasets: [
      {
        label: "보류건수",
        data: filterData.dep_defect_count.splice(0, 5),
        backgroundColor: pastelColors.slice(0, length),
        borderColor: pastelColors.slice(0, length),
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
