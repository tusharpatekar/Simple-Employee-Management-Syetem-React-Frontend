
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmpoyeeList from './components/EmpoyeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmpoyeeList />} />
          <Route path='/' element={<EmpoyeeList />} />
          <Route path='/employeeList' element={<EmpoyeeList />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
