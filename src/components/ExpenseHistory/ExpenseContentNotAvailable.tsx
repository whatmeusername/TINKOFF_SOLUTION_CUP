const ExpenseContentNotAvailable = () => {
	return (
		<div className="expenses__not__available">
			<p className="expenses__not__available__label">Вы не добавили еще не одной записи в свою историю</p>
		</div>
	);
};

const ExpenseContentNotFound = () => {
	return (
		<div className="expenses__not__available">
			<p className="expenses__not__available__label">мы не нашли не одной записи по заданому запросу</p>
		</div>
	);
};

export { ExpenseContentNotAvailable, ExpenseContentNotFound };