import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import history from "./history";
function App(props) {
	/* Adicionar uma rota para um componente, nao esqueca de importa o componente
     <Route exatc path="CAMINHO" element={<COMPONENTE/>} />
    */
	return (
		<BrowserRouter history={history}>
			<Routes>
				<Route exatc path="/" element={<Test />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
