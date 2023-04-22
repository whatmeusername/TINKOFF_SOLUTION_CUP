import { makeAutoObservable, observable, action, computed } from "mobx";
import { Expense } from "../interfaces";

class ExpensesStore {
	id = 0;
	@observable expenses: Expense[] = [];
	@observable categories: Set<string> = new Set();

	constructor() {
		makeAutoObservable(this);
	}

	@action
	addExpense(expense: Expense) {
		expense.id = this.id++;
		this.expenses.push(expense);
		this.categories.add(expense.category);
	}

	@computed
	get(category?: string): Expense[] {
		let expenses = this.expenses;
		if (category) {
			expenses = expenses.filter((e) => e.category === category);
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
