import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Donut = ({ chartData, onClick }) => {
  const Data = {
    labels: ["입출금", "증권", "기타"],
    datasets: [
      {
        data: [40, 20, 35],
        backgroundColor: ["#ffeb9b", "#b5f2ff", "#c5f2ba"],
        borderColor: ["#ffeb9b", "#b5f2ff", "#c5f2ba"],
      },
    ],
  };

  const Options = {};

  return (
    <div onClick={onClick}>
      <Doughnut data={Data} options={Options}></Doughnut>
    </div>
  );
};

export default Donut;
