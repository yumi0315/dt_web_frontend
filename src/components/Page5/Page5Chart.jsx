import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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
      acc.dep_def_rate.push(cur.dep_def_rate);

      return acc;
    },
    { dep: [], dep_def_rate: [] }
  );

  const length = filterData.dep.length > 5 ? 5 : filterData.dep.length;

  const Data = {
    labels: filterData.dep.splice(0, 5),
    datasets: [
      {
        data: filterData.dep_def_rate.splice(0, 5),
        backgroundColor: pastelColors.slice(0, length),
        borderColor: pastelColors.slice(0, length),
      },
    ],
  };

  const options = {
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
