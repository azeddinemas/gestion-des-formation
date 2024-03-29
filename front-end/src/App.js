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
import 'react-toastify/dist/ReactToastify.css';
import Editformation from './Components/admin/Formation/Editformation';
import Editeorganism from './Components/admin/Organism/Editeorganism';
import AdminRouter from './privattouter/AdminRouter';
import Notfound from './Components/Notfound.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route element={<AdminRouter/>}>
        <Route element={<DashboardAdmin/>}>
          <Route path='/dashboard' element={<Statistiques/>}/>
          <Route path='/employes' element={<Employe/>}/>
          <Route path='/formation' element={<Formation/>}/>
          <Route path='/organism' element={<Organism/>}/>
          <Route path='/editformation/:id' element={<Editformation/>}/>
          <Route path='/Editorganism/:id' element={<Editeorganism/>}/>
        </Route>
        </Route>
        <Route path='*' element={<Notfound/>}/>

        <Route path={'/'} element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
