import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DashboardAdmin from './Components/admin/DashboardAdmin';
import Statistiques from './Components/admin/Statistiques/Statistiques';
import Employe from './Components/admin/Employe/Employe';
import Formation from './Components/admin/Formation/Formation';
import Organism from './Components/admin/Organism/Organism';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>



        <Route element={<DashboardAdmin/>}>
          <Route path='/dashboard' element={<Statistiques/>}/>
          <Route path='/employes' element={<Employe/>}/>
          <Route path='/formation' element={<Formation/>}/>
          <Route path='/organism' element={<Organism/>}/>
        </Route>

        <Route path={'/login'} element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
