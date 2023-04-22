import { Line } from "react-chartjs-2";
import { Expense } from "../../interfaces";

const SpendLineGraph = ({ expensesData }: { expensesData: Expense[] }) => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Ранжирование цен по дню",
			},
		},
	};

	const data = {
		labels: expensesData.map((i) => i.spend),
		datasets: [
			{
				label: "Расход",
				data: expensesData.map((i) => i.date?.getDay()),
				borderColor: "rgb(240, 230, 25)",
				backgroundColor: "rgba(240, 230, 25, 0.5)",
			},
		],
	};
	return <Line options={options} data={data} />;
};

export default SpendLineGraph;
