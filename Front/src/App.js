import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import history from "./history";
import { SnackbarProvider } from "notistack";
import MainPage from "./Pages/MainPage";
import DayReport from "./Pages/DayReport";

function App(props) {
  /* Adicionar uma rota para um componente, nao esqueca de importa o componente
     <Route exatc path="CAMINHO" element={<COMPONENTE/>} />
    */
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter history={history}>
        <Routes>
          <Route exatc path="/" element={<MainPage />} />
          <Route exatc path="/day-report" element={<DayReport />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
