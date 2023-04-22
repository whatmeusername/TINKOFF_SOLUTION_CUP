import addExpenseModalControl from "../../store/modal";
import { observer } from "mobx-react-lite";
import "./expensesModal.scss";
import { useRef } from "react";
import { Expense } from "../../interfaces";
import expensesStore from "../../store/expenses";
import { FormField } from "./FormField";

const AddExpensesModal = observer(() => {
	const expensesData = useRef<Expense>({
		name: "",
		spend: 0,
		description: "",
		category: "",
		date: new Date(),
	});

	if (!addExpenseModalControl.isOpened) return <></>;

	const validationRef: { [K: string]: (() => boolean) | null } = {
		name: null,
		spend: null,
		description: null,
		category: null,
	};

	const onSubmit = () => {
		let isFailed = false;
		const validations = Object.values(validationRef);
		for (let i = 0; i < validations.length; i++) {
			const validator = validations[i];
			if (validator && !validator()) {
				isFailed = true;
			}
		}
		if (!isFailed) {
			expensesStore.addExpense(expensesData.current);
		}
	};

	return (
		<div className="add__expenses__modal__wrapper">
			<div className="add__expenses__modal__hidder" onClick={() => addExpenseModalControl.toogle()} />
			<div className="add__expenses__modal__content">
				<div className="add__expenses__modal__content__head">
					<h3 className="add__expenses__modal__header">Добавить новую запись о расходе</h3>
					<button className="add__expenses__modal__close" onClick={() => addExpenseModalControl.toogle()}>
						закрыть
					</button>
				</div>
				<div className="expenses__add__fields">
					<FormField
						refs={validationRef}
						fieldName={"name"}
						expensesData={expensesData.current}
						label={"Название"}
						isOptional={false}
						validation={(setErrorMessage: React.Dispatch<React.SetStateAction<string>>, value: string) => {
							if (value === "") {
								setErrorMessage("Поле не должно быть пустым");
								return false;
							}
							return true;
						}}
					/>
					<FormField
						refs={validationRef}
						fieldName={"spend"}
						expensesData={expensesData.current}
						label={"Израсходавано"}
						isOptional={false}
						validation={(setErrorMessage: React.Dispatch<React.SetStateAction<string>>, value: string) => {
							if (value === "") {
								setErrorMessage("Поле не должно быть пустым");
								return false;
							} else if (isNaN(parseFloat(value))) {
								setErrorMessage("Поле должно содержать только числовое значение");
								return false;
							}
							return true;
						}}
					/>
					<FormField
						refs={validationRef}
						fieldName={"category"}
						expensesData={expensesData.current}
						label={"Категория"}
						isOptional={false}
						validation={(setErrorMessage: React.Dispatch<React.SetStateAction<string>>, value: string) => {
							if (value === "") {
								setErrorMessage("Поле не должно быть пустым");
								return false;
							}
							return true;
						}}
					/>
					<FormField
						refs={validationRef}
						fieldName={"description"}
						expensesData={expensesData.current}
						label={"Описание"}
						isOptional={true}
					/>
				</div>
				<div className="add__expenses__modal__content__footer">
					<button className="add__expenses__modal__add" onClick={onSubmit}>
						Добавить запись
					</button>
				</div>
			</div>
		</div>
	);
});

export default AddExpensesModal;
