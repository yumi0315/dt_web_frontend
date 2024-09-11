import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = ({ chartData, onClick }) => {
  const filterData = chartData.reduce(
    (acc, cur) => {
      acc.dep.push(cur.dep);
      acc.dep_def_rate.push(cur.dep_def_rate);

      return acc;
    },
    { dep: [], dep_def_rate: [] }
  );

  const Data = {
    labels: filterData.dep,
    datasets: [
      {
        data: filterData.dep_def_rate,
        backgroundColor: ["#ffeb9b", "#b5f2ff", "#c5f2ba"],
        borderColor: ["#ffeb9b", "#b5f2ff", "#c5f2ba"],
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
        width: "100%",
        height: "300px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <Doughnut data={Data} options={options}></Doughnut>
    </div>
  );
};

export default Donut;
