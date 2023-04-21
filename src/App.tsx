import { BrowserRouter, Route, Routes } from "react-router-dom";

function Base() {
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank"></a>
				<a href="https://react.dev" target="_blank"></a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Base />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
