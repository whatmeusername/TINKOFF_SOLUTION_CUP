import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";

import expensesStore from "./store/expenses";
import ExpensesContentBlock from "./components/expensesHistory";
import AddExpensesModal from "./components/expenseModal";

expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });
expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });
expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });
expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });
expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });
expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });
expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });
expensesStore.addExpense({ name: "продукты", category: "продовольствие", date: new Date(), spend: 100 });

expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date(), spend: 1999 });
expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date(), spend: 1999 });
expensesStore.addExpense({ name: "Машина 12", category: "Автопром", date: new Date(), spend: 1999 });
expensesStore.addExpense({ name: "Машина 82", category: "Автопром", date: new Date(), spend: 1999 });
expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date(), spend: 1999 });
expensesStore.addExpense({ name: "Машина 9", category: "Автопром", date: new Date(), spend: 1999 });
expensesStore.addExpense({ name: "Машина 1", category: "Автопром", date: new Date(), spend: 1999 });
expensesStore.addExpense({ name: "Машина 5", category: "Автопром", date: new Date(), spend: 1999 });

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
