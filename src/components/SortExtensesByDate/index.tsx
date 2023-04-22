import { DateSortData, Expense } from "../../interfaces";
import "./SortExtensesByDate.scss";

const SortExtensesByDate = ({
	expensesData,
	sortData,
	setDateSort,
}: {
	expensesData: Expense[];
	sortData: DateSortData;
	setDateSort: React.Dispatch<React.SetStateAction<DateSortData>>;
}) => {
	const setDateOnChange = (event: React.ChangeEvent<HTMLInputElement>, key: "begin" | "end") => {
		setDateSort((prev) => {
			prev[key] = new Date(event.target.value);
			return { ...prev };
		});
	};

	const ResetDates = () => {
		setDateSort({ begin: null, end: null });
	};
	return (
		<div className="date__sort__wrapper">
			<div className="date__sort__container date__sort__container__item">
				<span className="date__sort__header">Сортировать по периоду</span>
				<div className="date__sort__inputs__wrapper">
					<span>С:</span>
					<input type="date" className="date__sort__input" onChange={(e) => setDateOnChange(e, "begin")} />
					<span>до</span>
					<input type="date" className="date__sort__input" onChange={(e) => setDateOnChange(e, "end")} />
					<button className="date__sort__reset" onClick={ResetDates}>
						сбросить
					</button>
				</div>
			</div>
			<div className="date__sort__container date__sort__container__item">
				<span>Общие расходы за выбранный период</span>
				<div className="date__extenses__spend__wrapper">
					{sortData.begin || sortData.end ? (
						<span className="date__extenses__spend">
							{expensesData
								.reduce((acc, cur) => {
									acc += cur.spend;
									return acc;
								}, 0)
								.toLocaleString("ru")}{" "}
							₽
						</span>
					) : (
						<span className="date__extenses__unselected">
							Для получения расчета необходимо выбрать период{" "}
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default SortExtensesByDate;
