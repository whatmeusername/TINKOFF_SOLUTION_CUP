import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import ExpensesStore from "../../store/expenses";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import addExpenseModalControl from "../../store/modal";

const SideBar = observer((): ReactElement => {
	return (
		<div className="sidebar__wrapper">
			<h3 className="sidebar__available__header">Панель учета расходов</h3>
			<button className="add__expense__button" onClick={() => addExpenseModalControl.toogle()}>
				Добавить расход
			</button>
			<div className="sidebar__available__categories">
				<h3 className="sidebar__available__header">Категории расходов</h3>
				<hr className="sidebar__available__header__hr" />
				<div className="sidebar__available__categories__list">
					{ExpensesStore.categories.size ? (
						<div className="sidebar__available__categories__list">
							<Link to={`/`} className="sidebar__available__categories__item">
								<span className="sidebar__available__categories__label">Все</span>
							</Link>
							{Array.from(ExpensesStore.categories).map((category) => {
								return (
									<Link
										to={`/category/${category}`}
										className="sidebar__available__categories__item"
										key={`category__item__${category}`}
									>
										<span className="sidebar__available__categories__label">{category}</span>
									</Link>
								);
							})}
						</div>
					) : (
						<div className="sidebar__available__empty">
							<span className="sidebar__available__empty__label">
								Категории не были еще сформированы :(
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
});

export default SideBar;
