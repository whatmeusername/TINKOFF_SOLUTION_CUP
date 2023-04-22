import { observer } from "mobx-react-lite";
import "./expensesHistory.scss";
import expensesStore from "../../store/expenses";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Expense } from "../../interfaces";

const ExpenseContentNotAvailabel = () => {
	return (
		<div className="expenses__not__available">
			<p className="expenses__not__available__label">Вы не добавили еще не одного расхода в свою историю</p>
		</div>
	);
};

const Columns = {
	name: "название",
	description: "описание",
	spend: "израсходавано",
	date: "дата",
	category: "категория",
};

const ExpenseContent = observer(({ expensesData }: { expensesData: Expense[] }) => {
	if (expensesData.length === 0) {
		return <ExpenseContentNotAvailabel />;
	}

	const widthPerColumn = useMemo(() => Math.floor(100 / Object.keys(Columns).length), []);

	return (
		<div className="expenses__content__table__wrapper">
			<div className="expenses__columns__header expenses__row">
				{Object.values(Columns).map((column) => {
					return (
						<div
							className="expenses__header__column"
							style={{ maxWidth: `${widthPerColumn}%`, minWidth: `${widthPerColumn}%` }}
							key={`expenses__header__column__${column}`}
						>
							<span className="expenses__header__column__label">{column}</span>
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
							{Object.keys(Columns).map((column) => {
								let value = (expense as any)[column];
								value = value instanceof Date ? value.toLocaleDateString() : value;
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
	);
});

const ExpensesContentBlock = () => {
	const { category } = useParams();
	const expensesData = expensesStore.get(category);
	return (
		<div className="expenses__block__header__wrapper">
			<h2 className="expenses__block__header">Ваши расходы{category ? ` в категории "${category}"` : ""}</h2>
			<ExpenseContent expensesData={expensesData} />
		</div>
	);
};

export default ExpensesContentBlock;
