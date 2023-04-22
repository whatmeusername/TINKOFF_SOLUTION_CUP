import { makeAutoObservable, observable, action, computed } from "mobx";
import { DateSortData, Expense } from "../interfaces";

class ExpensesStore {
	id = 0;
	@observable expenses: Expense[] = [];
	@observable categories: Set<string> = new Set();

	constructor() {
		makeAutoObservable(this);
	}

	@action
	addExpense(expense: Expense) {
		expense.date = expense.date ?? new Date();
		expense.id = this.id++;
		this.expenses.push(expense);
		this.categories.add(expense.category);
	}

	@computed
	get(category?: string, date?: DateSortData): Expense[] {
		let expenses = this.expenses;
		if (category) {
			expenses = expenses.filter((e) => e.category === category);
		}
		if (date) {
			if (date.begin && date.end) {
				expenses = expenses.filter(
					(e) => e.date && date.begin && date.end && e.date >= date.begin && e.date <= date.end
				);
			} else if (date.begin) {
				expenses = expenses.filter((e) => e.date && date.begin && e.date >= date.begin);
			} else if (date.end) {
				expenses = expenses.filter((e) => e.date && date.end && e.date <= date.end);
			}
		}
		return expenses;
	}

	@action deleteExpense(id: number) {
		const exist = this.expenses.findIndex((exp) => exp.id === id);
		if (exist !== -1) {
			this.expenses.splice(exist, 1);
		}
	}
}

const expensesStore = new ExpensesStore();
export default expensesStore;
