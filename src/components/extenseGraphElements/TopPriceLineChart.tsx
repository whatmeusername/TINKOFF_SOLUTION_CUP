import { Line } from "react-chartjs-2";
import { Expense } from "../../interfaces";

const TopPriceLineChart = ({ expensesData }: { expensesData: Expense[] }) => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Ранжирование цен по товару",
			},
		},
	};

	const data = {
		labels: expensesData.map((i) => i.name),
		datasets: [
			{
				label: "Расход",
				data: expensesData.map((i) => i.spend),
				borderColor: "rgb(240, 230, 25)",
				backgroundColor: "rgba(240, 230, 25, 0.5)",
			},
		],
	};
	return <Line options={options} data={data} />;
};

export default TopPriceLineChart;
