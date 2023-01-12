import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DashboardAdmin from './Components/admin/DashboardAdmin';
import Statistiques from './Components/admin/Dashboard/Statistiques';
import Employe from './Components/admin/Employe/Employe';
import Formation from './Components/admin/Formation/Formation';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DashboardAdmin/>}>
          <Route path='/dashboard' element={<Statistiques/>}/>
          <Route path='/employes' element={<Employe/>}/>
          <Route path='/formation' element={<Formation/>}/>
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
