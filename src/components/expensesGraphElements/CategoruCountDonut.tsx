import { Doughnut } from "react-chartjs-2";
import { Expense } from "../../interfaces";

function CategoryCountDought({ expensesData }: { expensesData: Expense[] }) {
	const count: { [K: string]: number } = {};
	expensesData.forEach((data: Expense) => {
		count[data.category] = count[data.category] ? count[data.category] + 1 : 1;
	});

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Подсчет товаров по категориям",
			},
		},
	};

	const data = {
		labels: Object.keys(count),
		datasets: [
			{
				label: "# of Votes",
				data: Object.values(count),
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};
	return <Doughnut data={data} options={options} />;
}

export default CategoryCountDought;
