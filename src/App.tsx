import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";

import expensesStore from "./store/expenses";
import ExpensesContentBlock from "./components/ExpenseHistory";
import AddExpensesModal from "./components/expenseModal";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

expensesStore.addExpense({ name: "Компьютер 23", category: "техника", date: new Date("2023-04-20"), spend: 20000 });
expensesStore.addExpense({ name: "Компьютер 78", category: "техника", date: new Date("2023-04-12"), spend: 8999 });
expensesStore.addExpense({ name: "Компьютер 90", category: "техника", date: new Date("2023-04-15"), spend: 18999 });
expensesStore.addExpense({ name: "Компьютер 23", category: "техника", date: new Date("2023-04-22"), spend: 20000 });
expensesStore.addExpense({ name: "Компьютер 1", category: "техника", date: new Date("2023-04-22"), spend: 29999 });
expensesStore.addExpense({ name: "Компьютер 32", category: "техника", date: new Date("2023-04-26"), spend: 38999 });
expensesStore.addExpense({ name: "Компьютер 21", category: "техника", date: new Date("2023-04-27"), spend: 8999 });
expensesStore.addExpense({ name: "Компьютер 56", category: "техника", date: new Date("2023-04-12"), spend: 88999 });

expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date("2023-04-18"), spend: 8999999 });
expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date("2023-04-15"), spend: 1999999 });
expensesStore.addExpense({ name: "Машина 12", category: "Автопром", date: new Date("2023-04-24"), spend: 1999999 });
expensesStore.addExpense({ name: "Машина 82", category: "Автопром", date: new Date("2023-04-29"), spend: 5999999 });
expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date("2023-04-10"), spend: 1999999 });
expensesStore.addExpense({ name: "Машина 9", category: "Автопром", date: new Date("2023-04-26"), spend: 2999999 });
expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date("2023-04-09"), spend: 1999999 });
expensesStore.addExpense({ name: "Машина 5", category: "Автопром", date: new Date("2023-04-22"), spend: 999999 });

function App() {
	return (
		<BrowserRouter>
			<div className="app__wrapper">
				<SideBar />
				<div className="expenses__content__wrapper">
					<Routes>
						<Route path={"/category/:category"} element={<ExpensesContentBlock />} />
						<Route path={"/"} element={<ExpensesContentBlock />} />
					</Routes>
				</div>
				<AddExpensesModal />
			</div>
		</BrowserRouter>
	);
}

export default App;
