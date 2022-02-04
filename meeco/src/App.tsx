import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTenant from "./pages/listTenant/listTenant";
import CreateTenant from "./pages/createTanent/createTenant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateTenant/>}/>
        <Route path="/" element={<ListTenant/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
