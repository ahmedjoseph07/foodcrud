import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UpdateFood from './components/UpdateFood';
import CreateFood from './components/CreateFood';
import AllFood from "./components/AllFood";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateFood/>}></Route>
          <Route path="/allfood" element={<AllFood/>}></Route>
          <Route path="/update" element={<UpdateFood/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
