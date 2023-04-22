import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import ExpensesStore from "../../store/expenses";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const SideBar = observer((): ReactElement => {
	return (
		<div className="sidebar__wrapper">
			<button className="add__expense__button">Добавить расход</button>
			<div className="sidebar__available__categories">
				<h3 className="sidebar__available__header">Категории:</h3>
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
