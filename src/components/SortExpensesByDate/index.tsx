import { useRef } from "react";
import { DateSortData, Expense } from "../../interfaces";
import "./SortExpensesByDate.scss";

const DateSortElement = ({ setDateSort }: { setDateSort: React.Dispatch<React.SetStateAction<DateSortData>> }) => {
	const beginRef = useRef<HTMLInputElement>(null!);
	const endRef = useRef<HTMLInputElement>(null!);

	const setDateOnChange = (event: React.ChangeEvent<HTMLInputElement>, key: "begin" | "end") => {
		setDateSort((prev) => {
			prev[key] = new Date(event.target.value);
			return { ...prev };
		});
	};

	const ResetDates = () => {
		setDateSort({ begin: null, end: null });
		beginRef.current.value = "";
		endRef.current.value = "";
	};

	return (
		<div className="date__sort__container date__sort__container__item">
			<span className="date__sort__header">Сортировать по периоду</span>
			<div className="date__sort__inputs__wrapper">
				<span>С:</span>
				<input
					type="date"
					ref={beginRef}
					className="date__sort__input"
					onChange={(e) => setDateOnChange(e, "begin")}
				/>
				<span>до</span>
				<input
					type="date"
					ref={endRef}
					className="date__sort__input"
					onChange={(e) => setDateOnChange(e, "end")}
				/>
				<button className="date__sort__reset" onClick={ResetDates}>
					сбросить
				</button>
			</div>
		</div>
	);
};

const TotalSpendingByDateElement = ({
	expensesData,
	sortData,
}: {
	expensesData: Expense[];
	sortData: DateSortData;
}) => {
	return (
		<div className="date__sort__container date__sort__container__item">
			<span>Общие расходы за выбранный период</span>
			<div className="date__expenses__spend__wrapper">
				{sortData.begin || sortData.end ? (
					<span className="date__expenses__spend">
						{expensesData
							.reduce((acc, cur) => {
								acc += cur.spend;
								return acc;
							}, 0)
							.toLocaleString("ru")}{" "}
						₽
					</span>
				) : (
					<span className="date__expenses__unselected">Для получения расчета необходимо выбрать период </span>
				)}
			</div>
		</div>
	);
};

const SortExpenseByDate = ({
	expensesData,
	sortData,
	setDateSort,
}: {
	expensesData: Expense[];
	sortData: DateSortData;
	setDateSort: React.Dispatch<React.SetStateAction<DateSortData>>;
}) => {
	return (
		<div className="date__sort__wrapper">
			<DateSortElement setDateSort={setDateSort} />
			<TotalSpendingByDateElement expensesData={expensesData} sortData={sortData} />
		</div>
	);
};

export default SortExpenseByDate;
