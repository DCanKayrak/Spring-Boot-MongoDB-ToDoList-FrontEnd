import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom';
import Project from './components/Project';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/project/:projectId' element={<Project/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
