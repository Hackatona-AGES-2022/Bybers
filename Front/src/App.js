import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./history";
import "./App.css";

/*
  CRIAR ROTA:
  <Route exatc path="CAMINHO" element={<COMPONENTE />} />
*/

function App() {
	return (
		<BrowserRouter history={history}>
			<Routes>
				<Route exatc path="" element={<div />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
