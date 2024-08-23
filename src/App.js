import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Login from "./pages/EmployerLogin";
import EmployerLogin from "./pages/EmployerLogin";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900">
      <div className="flex-grow">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employer_login" element={<EmployerLogin />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
