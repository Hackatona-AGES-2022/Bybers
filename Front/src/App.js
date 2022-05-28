import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import history from "./history";
import { SnackbarProvider } from 'notistack';
import MainPage from "./Pages/MainPage";
function App(props) {
	/* Adicionar uma rota para um componente, nao esqueca de importa o componente
     <Route exatc path="CAMINHO" element={<COMPONENTE/>} />
    */
	return (
		<SnackbarProvider maxSnack={3}>
		<BrowserRouter history={history}>
			<Routes>
				<Route exatc path="/" element={<Test />} />
				<Route exatc path="/main-page" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
		</SnackbarProvider>
	);
}

export default App;
