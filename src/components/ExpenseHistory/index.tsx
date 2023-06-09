import { observer } from "mobx-react-lite";
import "./expensesHistory.scss";
import expensesStore from "../../store/expenses";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { DateSortData, Expense } from "../../interfaces";
import ExpenseContentGraphs from "../expensesGraphElements/ExpenseContentGraphs";
import {
	ExpenseContentNotAvailable,
	ExpenseContentNotEnoughData,
	ExpenseContentNotFound,
} from "./ExpenseContentNotAvailable";
import SortExpensesByDate from "../SortExpensesByDate";

const Columns = {
	name: "название",
	description: "описание",
	spend: "израсходавано",
	date: "дата",
	category: "категория",
};

const ExpenseContent = observer(({ expensesData }: { expensesData: Expense[] }) => {
	const widthPerColumn = useMemo(() => Math.floor(100 / Object.keys(Columns).length), []);

	return (
		<>
			<h2 className="expenses__content__header">Найдено записей: {expensesData.length}</h2>
			<div className="expenses__content__table__wrapper">
				<div className="expenses__columns__header expenses__row">
					{Object.values(Columns).map((column) => {
						return (
							<div
								className="expenses__header__column"
								style={{ maxWidth: `${widthPerColumn}%`, minWidth: `${widthPerColumn}%` }}
								key={`expenses__header__column__${column}`}
							>
								<span className="expenses__header__column__header__label">{column}</span>
							</div>
						);
					})}
				</div>
				<div className="expenses__items__wrapper">
					{expensesData.map((expense) => {
						return (
							<div
								className="expenses__item__wrapper expenses__row"
								key={`expenses__item__row__${expense.id}`}
							>
								{(Object.keys(Columns) as Array<keyof Expense>).map((column) => {
									let value = expense[column];
									if (typeof value === "number") {
										value = value.toLocaleString("ru");
										if (column === "spend") {
											value += ` ₽`;
										}
									} else if (value instanceof Date) {
										value = value.toLocaleDateString("ru");
									} else {
										value = value === "" ? "-" : value;
									}

									return (
										<div
											className="expenses__item__column"
											style={{ maxWidth: `${widthPerColumn}%`, minWidth: `${widthPerColumn}%` }}
											key={`expenses__item__column__${column}`}
										>
											<span className="expenses__header__column__label">{value ?? "-"}</span>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
});

const ExpensesContentBlock = observer(() => {
	const [dateSort, setDateSort] = useState<DateSortData>({ begin: null, end: null });

	const { category } = useParams();
	const expensesData = expensesStore.get(category, dateSort);

	if (expensesData.length === 0 && !dateSort.begin && !dateSort.end) {
		return <ExpenseContentNotAvailable />;
	}

	return (
		<div className="expenses__block__wrapper">
			<h2 className="expenses__block__header">Ваши расходы{category ? ` в категории "${category}"` : ""}</h2>
			{expensesData.length > 1 ? (
				<ExpenseContentGraphs expensesData={expensesData} secondaryAsMost={category !== undefined} />
			) : expensesData.length === 1 ? (
				<ExpenseContentNotEnoughData />
			) : null}
			<SortExpensesByDate
				setDateSort={setDateSort}
				expensesData={expensesData}
				sortData={dateSort}
				key={category}
			/>
			{expensesData.length > 0 ? <ExpenseContent expensesData={expensesData} /> : <ExpenseContentNotFound />}
		</div>
	);
});

export default ExpensesContentBlock;
