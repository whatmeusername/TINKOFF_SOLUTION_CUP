import { Expense } from "../../interfaces";
import SpendLineGraph from "./SpendLineGraph";
import TopPriceLineChart from "./TopPriceLineChart";
import "./GraphsWrapper.scss";
import CategoryCountDought from "./CategoruCountDonut";

const ExpenseContentGraphs = ({
	expensesData,
	secondaryAsMost,
}: {
	expensesData: Expense[];
	secondaryAsMost?: boolean;
}) => {
	return (
		<div className="graphs__wrapper">
			<span className="graph__wrapper">
				<SpendLineGraph expensesData={expensesData} />
			</span>

			<span className="graph__wrapper">
				{secondaryAsMost ? (
					<TopPriceLineChart expensesData={expensesData} />
				) : (
					<CategoryCountDought expensesData={expensesData} />
				)}
			</span>
		</div>
	);
};

export default ExpenseContentGraphs;
