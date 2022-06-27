import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { ROUTES } from "./Constant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
