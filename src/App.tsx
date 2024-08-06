import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import MachineData from "./pages/MachineData";
import MachineMap from "./pages/MachineMap";
import Reports from "./pages/Reports";
import NoPage from "./pages/NoPage";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="machineData" element={<MachineData />} />
          <Route path="machineMap" element={<MachineMap />} />
          <Route path="reports" element={<Reports />} />
          <Route path="signin" element={<Signin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
