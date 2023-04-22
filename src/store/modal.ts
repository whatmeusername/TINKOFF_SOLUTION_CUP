import { makeAutoObservable, observable, action } from "mobx";

class AddExpenseModalControl {
	@observable isOpened = false;

	constructor() {
		makeAutoObservable(this);
	}

	@action
	toogle() {
		this.isOpened = !this.isOpened;
	}
}

const addExpenseModalControl = new AddExpenseModalControl();

export default addExpenseModalControl;
